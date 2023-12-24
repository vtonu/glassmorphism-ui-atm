import { useState } from 'react';

function GlassUI() {
  const [inputValue, setInputValue] = useState('');
  const [balance, setBalance] = useState(758);

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
        <div className="atmHeader">
          <img src={require('./saeslogo.png')} width="100" alt="saeslogo" />
          <h1>Bank Account</h1>
          <h5>Manage your account balance.</h5>
          <h6>Active</h6>
        </div>
        <div className="accountBalance">
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
