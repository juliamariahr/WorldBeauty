import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  tema: string
}

const FormularioCadastroCliente: React.FC<Props> = ({ tema }) => {
  const [cliente, setCliente] = useState({
    nome: '',
    sobreNome: '',
    email: '',
    endereco: {
      estado: '',
      cidade: '',
      bairro: '',
      rua: '',
      numero: '',
      codigoPostal: '',
      informacoesAdicionais: ''
    },
    telefones: [{ ddd: '', numero: '' }]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCliente(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCliente(prevState => ({
      ...prevState,
      endereco: {
        ...prevState.endereco,
        [id]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:32832/clientes', cliente)
      .then(response => {
        console.log('Cliente cadastrado com sucesso:', response.data);
        alert('Cliente cadastrado com sucesso!')
      })
      .catch(error => {
        console.error('Erro ao cadastrar cliente:', error);
      });
  };

  const estiloBotao = `btn waves-effect waves-light ${tema}`;

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="nome" type="text" className="validate" onChange={handleChange} />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field col s6">
            <input id="sobreNome" type="text" className="validate" onChange={handleChange} />
            <label htmlFor="sobreNome">Sobrenome</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="estado" type="text" className="validate" onChange={handleAddressChange} />
            <label htmlFor="estado">Estado</label>
          </div>
          <div className="input-field col s6">
            <input id="cidade" type="text" className="validate" onChange={handleAddressChange} />
            <label htmlFor="cidade">Cidade</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="bairro" type="text" className="validate" onChange={handleAddressChange} />
            <label htmlFor="bairro">Bairro</label>
          </div>
          <div className="input-field col s6">
            <input id="rua" type="text" className="validate" onChange={handleAddressChange} />
            <label htmlFor="rua">Rua</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="numero" type="text" className="validate" onChange={handleAddressChange} />
            <label htmlFor="numero">Número</label>
          </div>
          <div className="input-field col s6">
            <input id="codigoPostal" type="text" className="validate" onChange={handleAddressChange} />
            <label htmlFor="codigoPostal">Código Postal</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="informacoesAdicionais" type="text" className="validate" onChange={handleAddressChange} />
            <label htmlFor="informacoesAdicionais">Informações Adicionais</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button className={estiloBotao} type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastroCliente;
