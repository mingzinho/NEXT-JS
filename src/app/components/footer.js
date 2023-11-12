import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} | Ciclogenius | Todos os direitos reservados | Grupo Ás |
      </div>
    </footer>
  );
}