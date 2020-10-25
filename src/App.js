import './App.css';

import RandomQuote from './RandomQuote';

// Reach out to API, get some data, display on page

function App() {
  return (
    <div className="App-header">
      <header>
        <h1>Programmer Quotes</h1>
      </header>
      <main>
        <RandomQuote />
      </main>
    </div>
  );
}

export default App;
