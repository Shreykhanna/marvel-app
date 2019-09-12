import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ProductProvider} from './components/context';
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App';

ReactDOM.render(
  <ProductProvider>
     <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
    </ProductProvider>,
 document.getElementById('root'));


