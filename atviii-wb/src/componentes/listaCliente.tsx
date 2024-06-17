import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
  tema: string
}

const ListaCliente: React.FC<Props> = ({ tema }) => {
  const [clientes, setClientes] = useState<string[]>([]);
  const estilo = `collection-item active ${tema}`;

  useEffect(() => {
    axios.get('http://localhost:4000/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar clientes:', error);
      });
  }, []);

  return (
    <div className="collection">
      {clientes.map((cliente, index) => (
        <a key={index} className="collection-item">{cliente}</a>
      ))}
      <a className={estilo}>Cliente exemplo</a>
    </div>
  );
};

export default ListaCliente;
