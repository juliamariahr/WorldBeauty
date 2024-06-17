import React, { useEffect, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

interface Endereco {
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais: string;
}

interface Cliente {
  id: number;
  nome: string;
  sobreNome: string;
  email: string | null;
  endereco: Endereco;
  telefones: Array<{ ddd: string; numero: string }>;
}

type Props = {
  tema: string;
};

const ListaCliente: React.FC<Props> = ({ tema }) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const estilo = `collection-item active ${tema}`;

  const fetchClientes = async (url: string = 'http://localhost:32832/clientes') => {
    try {
      const response = await axios.get<Cliente[]>(url);
      setClientes(response.data);
    } catch (err) {
      const error = err as AxiosError;
      if (error.response && error.response.status === 302) {
        console.log('try to fetch: ' + JSON.stringify(error.response.data));
        setClientes(error.response.data as Cliente[]);
      } else {
        console.error('Erro ao carregar clientes:', error.message);
      }
    }
  };


  const deleteCliente = async (id: number) => {
    try {
      await axios.delete(`http://localhost:32832/clientes/${id}`);
      setClientes(clientes.filter(cliente => cliente.id !== id));
      alert('Cliente deletado com sucesso!');
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao deletar cliente:', error.message);
    }
  };

  const updateCliente = async (cliente: Cliente) => {
    try {
      const response = await axios.put<Cliente>(`http://localhost:32832/clientes/${cliente.id}`, cliente);
      setClientes(clientes.map(c => (c.id === cliente.id ? response.data : c)));
      const instance = M.Modal.getInstance(modalRef.current!);
      instance.close();
      setSelectedCliente(null);
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao atualizar cliente:', error.message);
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      M.Modal.init(modalRef.current);
    }
    fetchClientes();
  }, []);

  const handleEditClick = (cliente: Cliente) => {
    setSelectedCliente(cliente);
    const instance = M.Modal.getInstance(modalRef.current!);
    instance.open();
  };

  const handleModalClose = () => {
    setSelectedCliente(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedCliente) {
      const { id, value } = e.target;
      setSelectedCliente({
        ...selectedCliente,
        [id]: value,
      });
    }
  };

  return (
    <div className="collection">
      {clientes.map((cliente) => (
        <div key={cliente.id} className="collection-item">
          <span>
            <strong>ID:</strong> {cliente.id}
          </span>
          <br />
          <span>
            <strong>Nome:</strong> {cliente.nome} {cliente.sobreNome}
          </span>
          <br />
          {cliente.endereco && (
            <span>
              <strong>Endereço:</strong> {cliente.endereco.rua}, {cliente.endereco.numero} - {cliente.endereco.bairro},{' '}
              {cliente.endereco.cidade} - {cliente.endereco.estado}, {cliente.endereco.codigoPostal}
            </span>
          )}
          <br />
          <button className="btn" onClick={() => handleEditClick(cliente)}>Editar</button>
          <button className="btn red" onClick={() => deleteCliente(cliente.id)}>Deletar</button>
        </div>
      ))}

      {selectedCliente && (
        <div id="modal1" className="modal" ref={modalRef}>
          <div className="modal-content">
            <h4>Editar Cliente</h4>
            <input id="nome" type="text" value={selectedCliente.nome} onChange={handleInputChange} />
            <input id="sobreNome" type="text" value={selectedCliente.sobreNome} onChange={handleInputChange} />
            <input id="rua" type="text" value={selectedCliente.endereco.rua} onChange={handleInputChange} />
            <input id="numero" type="text" value={selectedCliente.endereco.numero} onChange={handleInputChange} />
            <input id="bairro" type="text" value={selectedCliente.endereco.bairro} onChange={handleInputChange} />
            <input id="cidade" type="text" value={selectedCliente.endereco.cidade} onChange={handleInputChange} />
            <input id="estado" type="text" value={selectedCliente.endereco.estado} onChange={handleInputChange} />
            <input id="codigoPostal" type="text" value={selectedCliente.endereco.codigoPostal} onChange={handleInputChange} />
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat" onClick={() => updateCliente(selectedCliente)}>Salvar</button>
            <button className="modal-close waves-effect waves-red btn-flat" onClick={handleModalClose}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaCliente;
