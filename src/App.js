import './App.css';
import Cards from './Cards'

function App() {

  const title = `React Recap`
  return (
    <div className="App">
      <h1>{title}</h1>
      <header>
        <h2>Multiple Components</h2>
      </header>

      <main>

        {/* Equivalent to Cards({number: 1}) */}
        <Cards number="1" />
        
        {/* Equivalent to Cards({number: 2}) */}
        <Cards number="2" />

      </main>

      <footer>
        <p>Created in the Recap Session</p>
      </footer>
    </div>
  );
}

export default App;
