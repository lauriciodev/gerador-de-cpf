import { useState } from "react";
import { cpf1 } from "./GeraCpf";

import "./global.css";

function App() {
  const [cpf, setCpf] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <div className="App">
      <div className="subcontainer">
        <h1>Gerador de cpf</h1>
        <div className="cpf__container">
          <input type="text" value={cpf} />
          <button
            className="btn"
            onClick={() => {
              navigator.clipboard.writeText(cpf);

              setCopied(true);
            }}
          >
            {copied ? "copiado !" : "copiar"}
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            setCpf(cpf1.geraNovoCpf());
            setCopied(false);
          }}
        >
          Gerar CPF
        </button>
      </div>
    </div>
  );
}

export default App;
