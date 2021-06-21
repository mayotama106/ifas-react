import React from "react";
import { Link } from 'react-router-dom'
import image1 from "./image/clothes/1.jpg"
import image2 from "./image/clothes/2.jpg"
import image3 from "./image/clothes/3.jpg"
import image4 from "./image/clothes/4.jpg"
import image5 from "./image/clothes/5.jpg"
import image6 from "./image/clothes/6.jpg"


export const choose = (props) =>  {

    const imageList = [
        {"nextLink":"/select", "path":image1},
        {"nextLink":"/select", "path":image2},
        {"nextLink":"/select", "path":image3},
        {"nextLink":"/select", "path":image4},
        {"nextLink":"/select", "path":image5},
        {"nextLink":"/select", "path":image6}
    ]

    return (
    <div class="bg-image">
        <h1> 好きな服を選んでください</h1>
        <ul>
            {imageList.map((image, index)=>{
                return(
                    <div>
                        <li>
                            <Link to={image.nextLink}><img src={image.path} /></Link> 
                        </li>
                    </div>
                )
            })}
        </ul>
        </div>);
}