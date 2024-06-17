import React, { useEffect } from 'react';
import axios from 'axios';

type Props = {
  tema: string
}

const RegistroConsumo: React.FC<Props> = ({ tema }) => {
  const estiloBotao = `btn waves-effect waves-light ${tema}`;

  useEffect(() => {
    axios.get('http://localhost:4000/consumo')
      .then(response => {
        console.log('Dados de consumo carregados:', response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar dados de consumo:', error);
      });
  }, []);

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="cliente_id" type="text" className="validate" />
            <label htmlFor="cliente_id">ID do Cliente</label>
          </div>
          <div className="input-field col s6">
            <input id="produto_id" type="text" className="validate" />
            <label htmlFor="produto_id">ID do Produto/Serviço</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="quantidade" type="text" className="validate" />
            <label htmlFor="quantidade">Quantidade</label>
          </div>
          <div className="input-field col s6">
            <input id="data_consumo" type="text" className="validate" />
            <label htmlFor="data_consumo">Data de Consumo</label>
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

export default RegistroConsumo;
