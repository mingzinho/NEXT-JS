import { useState } from 'react';

export default function DeteccaoBicicletas() {
  const [imageData, setImageData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const captureImage = async () => {
    // Lógica para capturar a imagem atual da webcam
    const videoFeed = document.getElementById('video-feed');
    const canvas = document.createElement('canvas');
    canvas.width = videoFeed.videoWidth;
    canvas.height = videoFeed.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoFeed, 0, 0, canvas.width, canvas.height);
    const capturedData = canvas.toDataURL('image/jpeg');

    // Exibir a imagem capturada na página
    videoFeed.style.display = 'none';
    setImageData(capturedData);

    // Enviar a imagem para a API e exibir o resultado
    sendImageToApi(capturedData);
  };

  const saveImage = () => {
    // Lógica para baixar a imagem capturada
    if (imageData) {
      const a = document.createElement('a');
      a.href = imageData;
      a.download = 'captured_image.jpg';
      a.click();
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const sendImageToApi = (imageData) => {
    // Lógica para enviar a imagem para a API e obter o resultado
    // Você pode implementar essa parte de acordo com a sua API de detecção de bicicletas.
    // Em seguida, defina o resultado e exiba-o na página.
  };

  return (
    <div>
      <head>
        <title>Deteção de Bicicletas</title>
        <link rel="stylesheet" type="text/css" href="/static/style.css" />
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
            <button onClick={captureImage} className="btn">Capturar Imagem</button>
            {imageData && (
              <div>
                <img src={imageData} style={{ display: 'block' }} className="captured-image" />
                <button onClick={saveImage} className="btn">Salvar Imagem</button>
              </div>
            )}
            <a
              id="image-link"
              href={imageData}
              download="captured_image.jpg"
              style={{ display: 'none' }}
              className="download-link"
            >
              Clique aqui para baixar a imagem capturada
            </a>
            {popupVisible && (
              <div id="popup" className="popup">
                <span className="popup-content" id="popup-content">
                  {popupContent}
                </span>
                <button onClick={closePopup} className="btn">
                  Fechar
                </button>
              </div>
            )}
          </div>
          <img src="/static/css/trees.png" className="trees" />
          <img src="/static/css/girl.png" className="girl" />
        </section>
      </body>
    </div>
  );
}