import { BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react';
// route
import {top} from './top';
import {choose} from './choose';
import {select} from './select';
import {Fitting} from './fitting';
import {takePhoto} from './takePhoto';

// base css
import './assets/css/style.css';
import './assets/css/destyle.css';
// fontawesome icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretLeft, faCaretRight);


export const App = () => {
  const [image, setImage] = useState([])
  
  return (
    <div className="App" >
        <BrowserRouter>
        
        <div className="bg-image">
          <Route path='/choose' component={choose} /> 
          <Route path='/select' component={select} /> 
          <Route path='/fitting' component={Fitting} /> 
          <Route path='/takePhoto' component={takePhoto} /> 
          <Route exact path='/' component={top} />
        </div>
      </BrowserRouter>
    </div>
  );
}