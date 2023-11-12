import Link from 'next/link';
import { useState } from 'react';

export default function CadastroBicicletas() {
    const [showModal, setShowModal] = useState(false);
  
    const handleCadastro = () => {
      // Simule um cadastro bem-sucedido
      setTimeout(() => {
        setShowModal(true);
      }, 2000); // Tempo de simulação (2 segundos)
    };
  
    const handleGoToReconhecimento = () => {
      <Link href="/partes">Ir para a Página de Reconhecimento</Link>
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <div>
        <div className="logomenu">
          <a href="/"> <img src="logo2.png" alt="" /></a>
        </div>
  
        <section>
          <img src="bg.png" className="bg" />
          <img src="girl.png" className="girl" />
          <div className="Leaves">
            <div className="set">
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_01.png') }}" /></div>
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_02.png') }}" /></div>
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_03.png') }}" /></div>
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_04.png') }}" /></div>
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_01.png') }}" /></div>
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_02.png') }}" /></div>
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_03.png') }}" /></div>
              <div><img src="{{ url_for('static', filename='public/static/css/leaf_04.png') }}" /></div>
            </div>
          </div>
  
          <div className="Login">
            <h2>Cadastro de Bicicleta</h2>
            <form onSubmit={handleCadastro}>
              <div className="inputBox"> <input type="text" name="modelo" placeholder="Modelo da Bicicleta" /></div>
              <div className="inputBox"> <input type="text" name="ano_fabricacao" placeholder="Ano de Fabricação" /></div>
              <div className="inputBox"> <input type="text" name="numero_serie" placeholder="Número de Série" /></div>
              <div className="inputBox"> <input type="text" name="cor" placeholder="Cor da Bicicleta" /></div>
              <div className="inputBox"> <input type="text" name="marca" placeholder="Marca da Bicicleta" /></div>
              <div className="inputBox"> <input type="text" name="valor" placeholder="Valor da Bicicleta" /></div>
              <div className="inputBox">
                <input type="submit" value="Cadastrar" id="cadastroButton" />
              </div>
              <div className="group">
                <a href="/">Já possui cadastro?</a> <a href="#">Entre aqui</a>
              </div>
            </form>
          </div>
          <img src="{{ url_for('static', filename='public/static/css/trees.png') }}" className="trees" />
          {/* Pop-up modal */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <p>O cadastro foi realizado com sucesso!</p>
                <p>Deseja ir para a página de reconhecimento?</p>
                <button onClick={handleGoToReconhecimento}>Ir para a Página de Reconhecimento</button>
                <button onClick={handleCloseModal}>Agora não</button>
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }