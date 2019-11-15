import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navpay = (props) =>{
  
    //  console.log(props)

    // setTimeout(()=>{
    //     props.history.push('/creditcard')
    // },2000)
      

    return(
        <div className="wrapper">
            <nav>
        
             <h3>Make Your Contribution</h3>
                <ul className="lin">
                <li><Link to="/home" style={{textDecoration:'none',fontSize:2}}><button className="btn">Total contributions detail</button></Link></li>
                 <li><NavLink to="/debitcard" style={{textDecoration:'none'}}><button className="btn">Debitcard</button></NavLink></li>
                 <li><NavLink to="/creditcard" style={{textDecoration:'none'}}><button className="btn">Creditcard</button></NavLink></li>
                 <li><NavLink to="/internetbanking" style={{textDecoration:'none'}}><button className="btn">Net Banking</button></NavLink></li>
                 <li><NavLink to="/Wallet" style={{textDecoration:'none'}}><button className="btn">Wallet</button></NavLink></li>
                 
                </ul>    
        
            </nav>
         </div>   
    );
}
//react router automatically applies those properties to the props on any of these routs here

export default withRouter(Navpay);