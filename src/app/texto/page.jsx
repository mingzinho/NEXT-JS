import React, { useEffect, useState } from 'react';

export default function ReconhecimentoTexto() {
  const [webcamStream, setWebcamStream] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultText, setResultText] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
        setWebcamStream(stream);
      } catch (error) {
        console.error('Erro ao acessar a webcam:', error);
      }
    };

    startWebcam();

    return () => {
      if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = webcamStream.getVideoTracks()[0].getSettings().width;
    canvas.height = webcamStream.getVideoTracks()[0].getSettings().height;
    const context = canvas.getContext('2d');
    context.drawImage(webcamStream, 0, 0, canvas.width, canvas.height);
    context.filter = 'contrast(1.2) brightness(1.2)';  // Ajustar o contraste e o brilho
    context.drawImage(webcamStream, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      setSelectedImage(URL.createObjectURL(blob));
      setUploading(true);

      const formData = new FormData();
      formData.append('image', blob, 'captured_image.png');

      try {
        const response = await fetch('/texto', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          if (data.error) {
            setResultText('Erro: ' + data.error);
          } else {
            setResultText('O número do chassi é: ' + data.text);
          }
        } else {
          setResultText('Erro ao enviar imagem para o servidor.');
        }
      } catch (error) {
        console.error(error);
        setResultText('Erro ao enviar imagem para o servidor.');
      }

      setUploading(false);
    });
  };

  return (
    <html>
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
      <head>
        <title>Reconhecimento de Texto</title>
      </head>
      <body>
        <div className="logomenu">
          <a href="/"> <img src="/static/css/logo2.png" alt="" /></a>
        </div>
        <section>
          <img src="/static/css/bg.png" className="bg" />
          <h1 className="title"></h1>
          <div className="image-container">
            <div id="webcam-container">
              <video id="webcam-stream" autoPlay playsInline style={{ maxWidth: '100%' }} />
            </div>
            <form id="capture-form" style={{ display: 'block' }}>
              <button type="button" id="capture-button" onClick={captureImage} disabled={uploading}>Capturar Imagem</button>
            </form>
            <form id="upload-form" style={{ display: 'none' }}>
              <button type="button" id="upload-button" disabled={uploading}>Enviar Imagem</button>
            </form>
            <img id="selected-image" style={{ display: 'none', maxWidth: '100%' }} src={selectedImage} alt="Imagem Capturada" />
            <div id="result">{resultText}</div>
          </div>
        </section>
      </body>
    </html>
  );
}