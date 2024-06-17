import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListaConsumo from './listaConsumo';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
  tema: string;
};

const RegistroConsumo: React.FC<Props> = ({ tema }) => {
  const [consumo, setConsumo] = useState({
    clienteId: '',
    produtoId: '',
    quantidade: '',
    dataConsumo: '',
  });

  const [update, setUpdate] = useState(false); // Estado para atualizar a lista de consumos

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setConsumo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:32832/consumos', consumo)
      .then((response) => {
        alert('Consumo registrado com sucesso!');
        console.log('Consumo registrado com sucesso:', response.data);
        setUpdate(!update); // Atualiza a lista de consumos
      })
      .catch((error) => {
        console.error('Erro ao registrar consumo:', error);
      });
  };

  const estiloBotao = `btn waves-effect waves-light ${tema}`;

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="clienteId" type="text" className="validate" onChange={handleChange} />
            <label htmlFor="clienteId">ID do Cliente</label>
          </div>
          <div className="input-field col s6">
            <input id="produtoId" type="text" className="validate" onChange={handleChange} />
            <label htmlFor="produtoId">ID do Produto/Serviço</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="quantidade" type="text" className="validate" onChange={handleChange} />
            <label htmlFor="quantidade">Quantidade</label>
          </div>
          <div className="input-field col s6">
            <input id="dataConsumo" type="text" className="validate" onChange={handleChange} />
            <label htmlFor="dataConsumo">Data de Consumo</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className={estiloBotao} type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
      <ListaConsumo tema={tema} update={update} />
    </div>
  );
};

export default RegistroConsumo;
