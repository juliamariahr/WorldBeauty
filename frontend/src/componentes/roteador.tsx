import React, { useState } from 'react';
import BarraNavegacao from './barraNavegacao';
import FormularioCadastroCliente from './formularioCadastroCliente';
import ListaCliente from './listaCliente';
import ListaProduto from './listaProdutos';
import RegistroConsumo from './registroConsumo';

const Roteador: React.FC = () => {
  const [tela, setTela] = useState('Clientes');

  const selecionarView = (novaTela: string) => {
    setTela(novaTela);
  };

  const barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="purple lighten-4"
      botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Registro de Consumo']}
    />
  );

  if (tela === 'Clientes') {
    return (
      <>
        {barraNavegacao}
        <ListaCliente tema="purple lighten-4" />
      </>
    );
  } else if (tela === 'Cadastro Cliente') {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroCliente tema="purple lighten-4" />
      </>
    );
  } else if (tela === 'Produtos') {
    return (
      <>
        {barraNavegacao}
        <ListaProduto tema="purple lighten-4" />
      </>
    );
  } else if (tela === 'Registro de Consumo') {
    return (
      <>
        {barraNavegacao}
        <RegistroConsumo tema="purple lighten-4" />
      </>
    );
  } else {
    return null;
  }
};

export default Roteador;
