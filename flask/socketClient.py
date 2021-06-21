import time

from flask.globals import current_app
import engineio
import socketio
import cv2
import base64
from datetime import datetime
from cv.realsense import Realsense
from inference.inference import inferenceEngine

from socketio import namespace

sio = socketio.Client()
#sio = socketio.Client(logger=True, engineio_logger=True)

flag = False
inferenceEngine = inferenceEngine(
    r"C:\Program\IFAS\IFAS\IR\face-detection-retail-0005")


@sio.on("message", namespace="/cv")
def onMessage(data):
    global flag
    if data == "shutter":
        print("I received message" + data)
        flag = True
    elif data == "videoOn":
        print("I received message" + data)
        flag = False


class SocketioClient(object):
    def __init__(self, sio):
        self.sio = sio
        self.server_addr = "localhost"
        self.server_port = 5000
        self.stream_fps = 12
        self.last_update_time = time.time()
        self.wait_time = (1/self.stream_fps)

    def setup(self):
        print('[INFO] Connecting to server http://{}:{}...'.format(
            self.server_addr, self.server_port))
        self.sio.connect(
            'http://{}:{}'.format(self.server_addr, self.server_port),
            transports=['websocket'],
            namespaces=['/cv'])
        # self.sio.wait()
        return self

    def _convert_image_to_jpeg(self, image):
        # Encode frame as jpeg
        frame = cv2.imencode('.jpg', image)[1].tobytes()
        # Encode frame in base64 representation and remove
        # utf-8 encoding
        frame = base64.b64encode(frame).decode('utf-8')
        return "data:image/jpeg;base64,{}".format(frame)

    def send_data(self, image):
        current_time = time.time()
        if current_time - self.last_update_time > self.wait_time:
            self.last_update_time = current_time

            self.sio.emit(
                'cv2server',
                {
                    'image': self._convert_image_to_jpeg(image)
                }, namespace="/cv")

    def check_exit(self):
        pass

    def close(self):
        self.sio.disconnect()


def main():
    global flag
    client = SocketioClient(sio).setup()
    realsense = Realsense()
    realsense.configurePipeline()
    realsense.startStream()
    forInference = None
    try:
        # Allow Webcam to warm up
        time.sleep(2.0)
        # loop detection
        while True:
            print("1")

            if flag == True:
                print("2")
                # output = inferenceEngine.infer(image)
                output = inferenceEngine.infer(forInference)

                for detection in output:
                    confidence = float(detection[2])

                    xmin = int(detection[3] * forInference.shape[1])
                    ymin = int(detection[4] * forInference.shape[0])
                    xmax = int(detection[5] * forInference.shape[1])
                    ymax = int(detection[6] * forInference.shape[0])

                    if confidence > 0.5:
                        cv2.rectangle(forInference, (xmin, ymin),
                                      (xmax, ymax), color=(240, 180, 0), thickness=3)
                client.send_data(forInference)

            else:
                print("3")
                color_img, bg_removed_img = realsense.getFrame()
                client.send_data(color_img)
                forInference = bg_removed_img

            if client.check_exit():
                break

    finally:
        if client is not None:
            client.close()
        print("Program Ending")


if __name__ == "__main__":
    main()
