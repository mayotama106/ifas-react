import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
import { useState } from 'react';
import './App.css';
import Countdown from "react-countdown";


const ENDPOINT = "http://localhost:5000/web"

// Flaskサーバへの接続




let socket = socketIOClient(ENDPOINT)

export const Fitting = () =>  {
  if(socket.connected != true){
    socket.connect()
  }
    const [image, setImage] = useState("")


    const [counter, setCounter] = React.useState(3);

    // Third Attempts
    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 3000);

        
      if (counter ==0) {
        socket.emit("message", "shutter")
      }

      
      return () => clearInterval(timer);
      

    }, [counter]);
  

    useEffect(()=>{

      
        socket.on("connect", () => {
            
        });

        socket.on("image", (image) => {
            setImage(image)
        });

        return () => {
        socket.emit("message", "videoOn")
        socket.disconnect()
      }
    }, [])

    


    return (
    <div class="bg-image">
        <h1> ３，２，１のカウントダウンで撮影します</h1>
        <div>{counter}</div>
        <img src={image} className="image-fitting"/>
        </div>);
}