import "../index.css";

import {useState} from 'react'

export default function CalculateForm( {onResult} ) {
  const [mortageType, setMortageType] = useState('')
  const [amount, SetAmount] = useState('')
  const [year, setYear] = useState('')
  const [percentage, setPercentage] = useState('')

  function handleSubmit(e){
    e.preventDefault();

    const principal = Number(amount);
    const montlyRate = Number(percentage) / 100 / 12;
    const months = Number(year) * 12;
    let monthlypayment;

    if(mortageType === 'repayment'){
      if(montlyRate === 0){
        monthlypayment = principal / months;
      }else{
        monthlypayment = (principal * montlyRate * Math.pow(1 + montlyRate, months)) / (Math.pow(1 + montlyRate, months) - 1);
      }
    } else if(mortageType === 'interestOnly'){
      monthlypayment = principal * montlyRate
    }
    
  }


  return (
    <div className="container">
      <form className="formCard" onSubmit={handleSubmit}>
        <div className="header">
          <h2 className="header-title">Mortage Calculator</h2>
          <button type="reset" className="header-btn">
            Clear ALL
          </button>
        </div>
        <div className="input-boxes">
          <div className="amount">
            <label>Mortage Amount</label>
            <input
              value={amount}
              onChange={(e)=> SetAmount(e.target.value)}
             placeholder="Enter the Amount" 
            />
          </div>
          <div className="mortage-term-Rate">
            <div className="term">
              <label>Mortage Term</label>
              <input 
              value={year}
              onChange={(e)=> setYear(e.target.value)}
              placeholder="Year" />
            </div>
            <div className="rate">
              <label>Interest Rate</label>
              <input 
                value={percentage}
                onChange={(e)=> setPercentage(e.target.value)}
              placeholder="Percentage" 
              />
            </div>
          </div>
          <div className="type">
            <label>Mortgage Type</label>
            <div className="repayment">
              <label>
                <input type="radio" 
                value='repayment'
                checked = {mortageType === 'repayment'}
                onChange={()=> setMortageType('repayment')}
                />
              </label>
              <span>Repayment</span>
            </div>
            <div className="interest">
              <label>
                <input type="radio" 
                value='interestOnly'
                checked = {mortageType === 'interestOnly'}
                onChange={()=> setMortageType('interestOnly')}
                />
              </label>
              <span>Interest</span>
            </div>
          </div>
        </div>
        <button type="submit" className="calculate-btn">
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}
