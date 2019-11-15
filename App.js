import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Debitcard from './component/Debitcard';
import Creditcard from './component/Creditcard';
import Home from './component/Home';
import Navpay from './component/Navpay';
import Internetbanking from './component/Internetbanking';
import Wallet from './component/Wallet';
import './App.css';
import './compstyle.css';


class App extends Component {


    render() {

        return ( 
            <BrowserRouter>
             <div className = "App" >
              
                <Navpay />

               <Route path='/home'  component={Home} />
               <Route path='/creditcard' component={Creditcard} />
               <Route path='/debitcard' component={Debitcard} />
               <Route path='/internetbanking' component={Internetbanking} />
               <Route path='/wallet' component={Wallet} />
               
               
             </div>
            </BrowserRouter>
        );

    }
}

export default App;

