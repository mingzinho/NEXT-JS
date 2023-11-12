import React from 'react';

export default function PaginaPartes() {
  const exibirMensagem = () => {
    alert("A análise foi concluída! Em alguns minutos retornaremos ;))");
  };

  return (
    <html>
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
      <head>
        <title>Ciclogenius - Página Inicial</title>
      </head>

      <body>
        <div className="logomenu">
          <a href="/"> <img src="/static/css/logo2.png" alt="" /></a>
        </div>

        <section className="partes">
          <div className="container1">
            <div className="item-container">
              <div className="item-box">
                <h2>Bicicleta</h2>
                <img src="/static/css/bicicleta.png" alt="Bicicleta Inteira" />
                <div className="item-button">
                  <a href="/reconhecimento" className="button">Analise a Bike</a>
                </div>
              </div>
              <div className="item-box">
                <h2>Guidão</h2>
                <img src="/static/css/guidao.png" alt="Guidão" />
                <div className="item-button">
                  <a href="/reconhecimento" className="button">Analise o Guidão</a>
                </div>
              </div>
              <div className="item-box">
                <h2>Rodas</h2>
                <img src="/static/css/roda.png" alt="Rodas" />
                <div className="item-button">
                  <a href="/reconhecimento" className="button">Analise as Rodas</a>
                </div>
              </div>
              <div className="item-box">
                <h2>Quadro</h2>
                <img src="/static/css/quadro.png" alt="Quadro" />
                <div className="item-button">
                  <a href="/reconhecimento" className="button">Analise o Quadro</a>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item-box bottom-items">
                <h2>Chassi</h2>
                <img src="/static/css/chassi.png" alt="Chassi" />
                <div className="item-button">
                  <a href="/texto" className="button">Verifique o Chassi</a>
                </div>
              </div>
              <div className="item-box bottom-items">
                <h2>Pedal</h2>
                <img src="/static/css/pedal.png" alt="Pedal" />
                <div className="item-button">
                  <a href="/reconhecimento" className="button">Analise o Pedal</a>
                </div>
              </div>
              <div className="item-box bottom-items">
                <h2>Disco</h2>
                <img src="/static/css/disco.png" alt="Disco" />
                <div className="item-button">
                  <a href="/reconhecimento" className="button">Analise o Disco</a>
                </div>
              </div>
              <div className="item-box bottom-items">
                <h2>Banco</h2>
                <img src="/static/css/banco.png" alt="Banco" />
                <div className="item-button">
                  <a href="/reconhecimento" className="button">Analise o Banco</a>
                </div>
              </div>
            </div>
            <div className="Leaves">
              <div className="set">
                <div><img src="/static/css/leaf_01.png" /></div>
                <div><img src="/static/css/leaf_02.png" /></div>
                <div><img src="/static/css/leaf_03.png" /></div>
                <div><img src="/static/css/leaf_04.png" /></div>
                <div><img src="/static/css/leaf_01.png" /></div>
                <div><img src="/static/css/leaf_02.png" /></div>
                <div><img src="/static/css/leaf_03.png" /></div>
                <div><img src="/static/css/leaf_04.png" /></div>
              </div>
            </div>
          </div>
          <img src="/static/css/bg.png" className="bg" />
          <img src="/static/css/trees.png" className="trees" />
          <div className="concluir-button">
            <button onClick={exibirMensagem}>Concluído</button>
          </div>
        </section>
      </body>
    </html>
  );
}