import { useState } from "react";
import React from "react";
import gem from './assets/gem.svg'
import logo from './img/logo.png'
import './styles.css'

function App() {
  const [number, setConta] = useState("")
  const [password, setAgencia] = useState("")


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <h3 className="login-form-title">CrystalBank</h3>


            <span className="login-form-title">
              <img src={logo} alt="CB" />
            </span>

            <div className="wrap-input">
              <input className={number !== "" ? 'has-val input' : 'input'} type="number" value={number} onChange={e => setConta(e.target.value)} required />
              <span className="focus-input" data-placeholder="Conta"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setAgencia(e.target.value)} required />
              <span className="focus-input" data-placeholder="Agencia"></span>
            </div>

            <div className="container-login-form-btn">
            <input class="btn" type="submit" value="Entrar"/>
            </div>

            <div className="text-center">
              <span className="txt1"> Não Possui Conta?  </span>
              <a className="txt2" href="#">Criar</a>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
