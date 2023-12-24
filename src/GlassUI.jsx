import { useState } from 'react';

function GlassUI() {
  const [inputValue, setInputValue] = useState('');

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <div>
      <div className="upper-layer">
        <div className="atmHeader">
          <h1>Bank Account</h1>
          <h5>Manage your account balance.</h5>
          <h6>Active</h6>
        </div>
        <div className="accountBalance">
          <h5>Current Balance:</h5>
          <h1>$ 758.00</h1>
          <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <div className="buttonsHeader">
          <button className="button" onClick={clearInput}>
            Clear
          </button>
          <button className="button">Deposit</button>
          <button className="button">Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default GlassUI;
