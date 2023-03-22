import Header from "./components/Header.js"
import About from "./components/About.js"
import Home from "./components/Home.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
