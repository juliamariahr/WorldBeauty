import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
  tema: string
}

const ListaProduto: React.FC<Props> = ({ tema }) => {
  const [produtos, setProdutos] = useState<string[]>([]);
  const estilo = `collection-item active ${tema}`;

  useEffect(() => {
    axios.get('http://localhost:4000/produtos')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar produtos:', error);
      });
  }, []);

  return (
    <div className="collection">
      {produtos.map((produto, index) => (
        <a key={index} className="collection-item">{produto}</a>
      ))}
      <a className={estilo}>Produto exemplo</a>
    </div>
  );
};

export default ListaProduto;
