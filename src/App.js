import logo from './logo.svg';
import './App.css';
import Header from './LCComp'
import Container from './UmComp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Container />
      </header>
    </div>
  );
}

export default App;
