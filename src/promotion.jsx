import React from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/img/logo/logo.svg";
import clothe from "./assets/img/clothes/019360_1-removebg-preview.png"

export const promotion = (props) => {
    return (
        <div class="wrapper promotion">
            <div class="main">
                <div class="img_container">
                    <img src={clothe} alt="" />
                </div>
                <h2 class="clothes_name">test-T</h2>
                <ul class="colors">
                    <li class="item blue active"><a href=""></a></li>
                    <li class="item black"><a href=""></a></li>
                    <li class="item white"><a href=""></a></li>
                    <li class="item yellow"><a href=""></a></li>
                </ul>
                <div class="card">
                    <div class="card-content">
                        <p class="explanation">テキストが入りますタイトルが入りますテキストが入りますタイトルが入りますテキストが入りますタイトルが入ります</p>
                        <p className="price">¥1,000</p>
                        <button class="btn">着てみる</button>
                    </div>
                </div>
            </div>
        </div>);
}