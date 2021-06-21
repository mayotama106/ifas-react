import React from "react";
import {Link } from 'react-router-dom';

export const top = (props)=>  {
    return (<div class="bg-image">
        
        <button>
            <Link to='/Choose'>着てみる</Link>
        </button>
        </div>);
}