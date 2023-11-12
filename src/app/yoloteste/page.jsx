import React, { useState } from 'react';

export default function TesteYolo() {
  const [imageData, setImageData] = useState(null);
  const [capturedImageVisible, setCapturedImageVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const captureImage = () => {
    const videoFeed = document.getElementById("video-feed");
    const canvas = document.createElement("canvas");
    canvas.width = videoFeed.width;
    canvas.height = videoFeed.height;
    const context = canvas.getContext("2d");
    context.drawImage(videoFeed, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg");
    setImageData(dataUrl);
    setCapturedImageVisible(true);

    // Enviar a imagem para a API e exibir o resultado (substitua com sua lógica)
    sendImageToApi(dataUrl);
  };

  const saveImage = () => {
    if (imageData) {
      const a = document.createElement("a");
      a.href = imageData;
      a.download = "captured_image.jpg";
      a.click();
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <html>
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
      <head>
        <title>Teste Yolo</title>
      </head>
      <body>
        <div className="logomenu">
          <a href="/"> <img src="/static/css/logo2.png" alt="" /></a>
        </div>
        <section>
          <img src="/static/css/bg.png" className="bg" />
          <h1 className="title"></h1>
          <div className="image-container">
            <img id="video-feed" src="/video_feed" className="video-image" />
            <button id="capture-image" className="btn" onClick={captureImage}>
              Capturar Imagem
            </button>
            {capturedImageVisible && (
              <img id="captured-image" src={imageData} alt="Imagem Capturada" className="captured-image" />
            )}
            <button id="save-image" className="btn" onClick={saveImage}>
              Salvar Imagem
            </button>
            {imageData && (
              <a
                id="image-link"
                href={imageData}
                download="captured_image.jpg"
                className="download-link"
                style={{ display: capturedImageVisible ? 'block' : 'none' }}
              >
                Clique aqui para baixar a imagem capturada
              </a>
            )}
          </div>
          <img src="/static/css/trees.png" className="trees" />
          <img src="/static/css/girl.png" className="girl" />
        </section>
      </body>
    </html>
  );
}