import logo from './logo.svg';
import './App.css';
import { exibirHorario } from './components/Horario';
import { fazerLogin } from './components/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id={"lnk"}
        >
          Learning React
        
        </a>
        <br/>
        <input type='text' id='txtLogin' placeholder='Login' />
        <br/>
        <input type='text' id='txtSenha' placeholder='Senha' />
        <br/>
        <button onClick={fazerLogin} id={"buttonLogin"}>
          Fazer Login
        </button>

        <button onClick={exibirHorario} id={"buttonHorario"}>
          Ver Horário
        </button>
      </header>
    </div>
  );
}

export default App;
