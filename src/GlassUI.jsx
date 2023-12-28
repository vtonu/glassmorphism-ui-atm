import { useState } from 'react';

function GlassUI() {
  const [inputValue, setInputValue] = useState('');
  const [balance, setBalance] = useState(1225.55);

  const deposit = () => {
    setBalance(balance + Number(inputValue));
    setInputValue('');
  };

  const withdraw = () => {
    if (balance >= Number(inputValue)) {
      setBalance(balance - Number(inputValue));
      setInputValue('');
    } else {
      alert('Insufficient balance');
    }
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <div>
      <div className="upper-layer">
        <img src={require('./close.png')} width="16" alt="saeslogo" className="closeButton" />
        <div className="atmHeader">
          <img src={require('./saeslogo_atm.png')} width="110" alt="saeslogo" />
          {/* <h2>ATM</h2> */}
          {/* <h5>Manage your account balance.</h5> */}
        </div>
        <div className="accountBalance">
          <h6>ACTIVE</h6>
          <h5>Current Balance:</h5>
          <h1>${balance.toFixed(2)}</h1>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              if (e.target.value.length <= 7) {
                setInputValue(e.target.value);
              }
            }}
            max="1000000"
          />
        </div>
        <div className="buttonsHeader">
          <button className="button" onClick={clearInput}>
            CLEAR
          </button>
          <button className="button" onClick={deposit}>
            DEPOSIT
          </button>
          <button className="button" onClick={withdraw}>
            WITHDRAW
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlassUI;
