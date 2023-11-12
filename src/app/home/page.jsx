import React from 'react';

export default function PaginaInicial() {
  return (
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" type="text/css" href="/static/style.css" />
        <title>Ciclogenius - Página Inicial</title>
      </head>

      <body>
        <div className="logomenu">
          <a href="/"> <img src="/static/css/logo2.png" alt="" /></a>
        </div>
        <section>
          <div className="Leaves">
            <div className="logo-container">
              <div className="logo2">
                <img src="/static/css/fiap.png" style={{ width: '170px', height: '50px' }} />
              </div>
              <div className="logo1">
                <img src="/static/css/logo4.png" />
              </div>
              <div className="logo2">
                <img src="/static/css/porto.png" style={{ width: '200px', height: '50px' }} />
              </div>
            </div>
            <div className="set">
              <img src="/public/static/css/trees.png" className="trees" />
              <div><img src="/public/static/css/leaf_01.png" /></div>
              <div><img src="/public/static/css/yolo.png" style={{ width: '120px' }} /></div>
              <div><img src="/public/static/css/leaf_02.png" /></div>
              <div><img src="/public/static/css/python.png" style={{ width: '100px' }} /></div>
              <div><img src="/public/static/css/leaf_03.png" /></div>
              <div><img src="/public/static/css/opencv.png" style={{ width: '100px' }} /></div>
              <div><img src="/public/static/css/leaf_04.png" /></div>
              <div><img src="/public/static/css/leaf_01.png" /></div>
              <div><img src="/public/static/css/leaf_02.png" /></div>
              <div><img src="/public/static/css/leaf_03.png" /></div>
              <div><img src="/public/static/css/leaf_04.png" /></div>
            </div>
          </div>
          <a href="/cadastro" className="button">Cadastre sua bike!</a>
          <a href="/yoloteste" className="button">Teste o nosso YoloV8!</a>
          <img src="/static/css/girl.png" className="girl" />
          <div className="video">
            <h2>Veja como funciona nossa Inteligência</h2>
            <video width="560" height="300" controls>
              <source src="/video/bikevideo5.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </section>
        <img src="/static/css/bg.png" className="bg" />
      </body>
    </html>
  );
}