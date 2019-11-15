import React from 'react';

const Creditcard = () =>{


    return(
       <div>
        <h4>Creditcard</h4>
        <p>make your payment</p>
        <form>
  <label htmlFor="name">Contribution Amount(Rs):</label>
  <input type="number"/>
  </form>         
        <form>

<label htmlFor="name">Card Number</label><br></br>
<input type="number" id="age"/>
</form>
<br></br>
<br></br>
<br></br>


    <form>
    <label htmlFor="name">Expiry Date:</label><br></br>
           <select name="Month">
               <option>Month</option>
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August	</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
  </select>
  
  </form>
  <form>

           <select name="Year">
               <option>Year</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
  <option value="2026">2026</option>
  <option value="2027">2027</option>
  <option value="2028">2028</option>
  <option value="2029">2029</option>
  <option value="2030">2030</option>
  </select>
  <input type="submit"/>
  </form>

  <form>
  <label htmlFor="name">CVV</label><br></br>
  <input type="password" />
  </form>    
  <br></br>

  <button style={{margin:'10px'}}>make Payment</button>
  <button>cancel</button>

 </div>    
    );
}

export default Creditcard;