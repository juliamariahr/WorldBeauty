import React, { useEffect } from 'react';
import axios from 'axios';

type Props = {
  tema: string
}

const FormularioCadastroProduto: React.FC<Props> = ({ tema }) => {
  const estiloBotao = `btn waves-effect waves-light ${tema}`;

  useEffect(() => {
    axios.get('http://localhost:4000/produtos')
      .then(response => {
        console.log('Dados de produtos carregados:', response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar produtos:', error);
      });
  }, []);

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="produto_nome" type="text" className="validate" />
            <label htmlFor="produto_nome">Nome do Produto/Serviço</label>
          </div>
          <div className="input-field col s6">
            <input id="produto_preco" type="text" className="validate" />
            <label htmlFor="produto_preco">Preço</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className={estiloBotao} type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastroProduto;
