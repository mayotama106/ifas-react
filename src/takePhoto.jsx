import React from "react";
import { Link } from 'react-router-dom'
import stroke from "./assets/img/stroke.png" 
import bg from "./assets/img/take_dummy.jpg"

// import socketIOClient from "socket.io-client"
// import { useState } from 'react';
// import Countdown from "react-countdown";


// const ENDPOINT = "http://localhost:5000/web"

// Flaskサーバへの接続




// let socket = socketIOClient(ENDPOINT)


export const takePhoto = (props) => {
  // if(socket.connected !== true){
  //   socket.connect()
  // }
  //   const [image, setImage] = useState("")


  //   const [counter, setCounter] = React.useState(3);

  //   // Third Attempts
  //   useEffect(() => {
  //     const timer =
  //       counter > 0 && setInterval(() => setCounter(counter - 1), 3000);

        
  //     if (counter === 0) {
  //       socket.emit("message", "shutter")
  //     }

      
  //     return () => clearInterval(timer);
      

  //   }, [counter]);
  

  //   useEffect(()=>{

      
  //       socket.on("connect", () => {
            
  //       });

  //       socket.on("image", (image) => {
  //           setImage(image)
  //       });

  //       return () => {
  //       socket.emit("message", "videoOn")
  //       socket.disconnect()
  //     }
  //   }, [])
  const imageList = [
    { "nextLink": "/fitting", "path": stroke },
  ]

  return (
      <div class="wrapper takePhoto">
        <div class="bg">
          <Link to={imageList[0].nextLink}>
            <img src={bg} alt="" />
          </Link>
        </div>
        <div class="stroke">
            <img src={stroke} alt="" />
        </div>
        <div class="main">
          <div class="text_container">
            <p class="que">
              3・２・１の合図で<br />撮影します
            </p>
          </div>
        </div>
      </div>
  );
}