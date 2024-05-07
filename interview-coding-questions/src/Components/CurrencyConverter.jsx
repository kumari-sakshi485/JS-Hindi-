import  { useState } from "react";

const CurrencyConverter= () => {
  // State for input amount and converted amount
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  // Hard-coded exchange rate (1 USD = 0.85 EUR)
  const exchangeRate = 0.85;

  // Event handler for input change
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  // Event handler for conversion
  const convertCurrency = () => {
    const convertedValue = parseFloat(amount) * exchangeRate;
    setConvertedAmount(convertedValue.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label htmlFor="amount">Enter amount in USD:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={convertCurrency}>Convert to EUR</button>
      {convertedAmount && (
        <p>
          {amount} USD is equal to {convertedAmount} EUR
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
