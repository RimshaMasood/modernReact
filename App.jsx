import { useState } from "react";

const quotes = [
    "Believe in yourself!",
    "Stay positive and happy.",
    "Never give up!",
    "Do what you love.",
    "Make today amazing!"
];

function App() {
    const [quote, setQuote] = useState("Click the button to get a quote.");

    const generateQuote = () => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div>
            <h1>Quote Generator</h1>
            <p>{quote}</p>
            <button onClick={generateQuote}>New Quote</button>
        </div>
    );
}

export default App;
