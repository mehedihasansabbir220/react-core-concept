import logo from './logo.svg';
import './App.css';

function App() {
  const number = 555;

  const singer = {
    name: 'Dr. Mahfux',
    job: 'singer'
  }
  const singer2 = {
    name: 'Eva Rahman',
    job: 'singer',
  }
  const singerStyle = {
    backgroundColor: 'green'
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>You You reacr mama</h3>
        <p>Happy React mama</p>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h3>This is inside my container </h3>
          <p style={{ color: 'white' }}>singer:{singer.name + ' ' + singer.job}</p>
          <p>Real Singer:{singer2.name}</p>
          <h4 style={singerStyle}>My number:{number}</h4>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
