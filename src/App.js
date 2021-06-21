import { BrowserRouter, Route } from 'react-router-dom'
import {top} from './top';
import {choose} from './choose';
import {select} from './select';
import {Fitting} from './fitting';
import './App.css';
import { useState } from 'react';


export const App = () => {
  const [image, setImage] = useState([])
  
  return (
    <div className="App" >
        <BrowserRouter>
        
        <div className="bg-image">
          <Route path='/choose' component={choose} /> 
          <Route path='/select' component={select} /> 
          <Route path='/fitting' component={Fitting} /> 
          <Route exact path='/' component={top} />
        </div>
      </BrowserRouter>
    </div>
  );
}