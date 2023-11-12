import React from 'react';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Ciclogenius</a>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Página Inicial</a></li>
          <li><a href="/cadastro">Cadastro</a></li>
          <li><a href="/partes">Partes</a></li>
          <li><a href="/yoloteste">Teste Nosso Yolo</a></li>
          <li><a href="/texto">Reconhecimento de Texto</a></li>
        </ul>
      </nav>
    </header>
  );
}