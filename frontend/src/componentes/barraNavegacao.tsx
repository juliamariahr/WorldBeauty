import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
  tema: string,
  botoes: string[],
  seletorView: (view: string) => void
}

const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }, []);

  const gerarListaBotoes = () => {
    return botoes.length <= 0 ? (
      <></>
    ) : (
      botoes.map((valor) => (
        <li key={valor}><a onClick={() => seletorView(valor)}>{valor}</a></li>
      ))
    );
  };

  return (
    <>
      <nav className={tema}>
        <div className="nav-wrapper">
          <a className="brand-logo">WB</a>
          <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            {gerarListaBotoes()}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-menu">
        {gerarListaBotoes()}
      </ul>
    </>
  );
};

export default BarraNavegacao;
