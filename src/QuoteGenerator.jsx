import { useState } from "react";
import "./QuoteGenerator.css";

const quotes = [
  "Believe in yourself!",
  "Stay positive and happy.",
  "Never give up!",
  "Do what you love.",
  "Make today amazing!"
];

function QuoteGenerator() {
  const [quote, setQuote] = useState("Click the button to get a quote.");

  const generateQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
