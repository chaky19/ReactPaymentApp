import React from 'react';

const Wallet = () =>{


    return(
        <React.Fragment>
         <h4>Wallet</h4>
          <form>
          <p>Please select your Wallet:</p>    
          <input type="radio" name="Wallet" value="BHIM"/>
          <span>BHIM</span><br></br><br></br>
          <input type="radio" name="Wallet" value="PhonePe"/>
          <span>PhonePe</span><br></br><br></br> 
          <input type="radio" name="Wallet" value="G-Pay"/>
          <span>G-Pay(Tez)</span><br></br><br></br>
          <input type="radio" name="Wallet" value="paytm"/>
          <span>paytm</span><br></br><br></br>
          <button>Submit</button>
          </form>         

          </React.Fragment>
     );
}

export default Wallet;