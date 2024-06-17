import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  tema: string;
  onProdutoCadastrado: () => void; // Função de callback para notificar o cadastro de um novo produto
};

const FormularioCadastroProduto: React.FC<Props> = ({ tema, onProdutoCadastrado }) => {
  const [produto, setProduto] = useState({ nome: '', preco: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProduto(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:32832/produtos', {
      nome: produto.nome,
      preco: parseFloat(produto.preco),
    })
    .then(response => {
      alert('Produto cadastrado com sucesso!');
      console.log('Produto cadastrado com sucesso:', response.data);
      setProduto({ nome: '', preco: '' });
      onProdutoCadastrado(); // Chamar a função de callback para atualizar a lista de produtos
    })
    .catch(error => {
      console.error('Erro ao cadastrar produto:', error);
    });
  };

  const estiloBotao = `btn waves-effect waves-light ${tema}`;

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="nome" type="text" className="validate" value={produto.nome} onChange={handleChange} />
            <label htmlFor="nome">Nome do Produto</label>
          </div>
          <div className="input-field col s6">
            <input id="preco" type="text" className="validate" value={produto.preco} onChange={handleChange} />
            <label htmlFor="preco">Preço</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className={estiloBotao} type="submit" name="action">Cadastrar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastroProduto;
