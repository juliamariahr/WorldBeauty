import React, { useEffect, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

interface Consumo {
  id: number;
  clienteId: number;
  produtoId: number;
  quantidade: number;
  dataConsumo: string;
}

type Props = {
  tema: string;
  update: boolean;
};

const ListaConsumo: React.FC<Props> = ({ tema, update }) => {
  const [consumos, setConsumos] = useState<Consumo[]>([]);
  const [selectedConsumo, setSelectedConsumo] = useState<Consumo | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const fetchConsumos = async () => {
    try {
      const response = await axios.get<Consumo[]>('http://localhost:32832/consumos');
      setConsumos(response.data);
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao carregar consumos:', error.message);
    }
  };

  const deleteConsumo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:32832/consumos/${id}`);
      setConsumos(consumos.filter(consumo => consumo.id !== id));
      alert('Consumo deletado com sucesso!');
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao deletar consumo:', error.message);
    }
  };

  const updateConsumo = async (consumo: Consumo) => {
    try {
      const response = await axios.put<Consumo>(`http://localhost:32832/consumos/${consumo.id}`, consumo);
      setConsumos(consumos.map(c => (c.id === consumo.id ? response.data : c)));
      setSelectedConsumo(null);
      const instance = M.Modal.getInstance(modalRef.current!);
      instance.close();
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao atualizar consumo:', error.message);
    }
  };

  const handleEditClick = (consumo: Consumo) => {
    setSelectedConsumo(consumo);
    const instance = M.Modal.getInstance(modalRef.current!);
    instance.open();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedConsumo) {
      const { id, value } = e.target;
      setSelectedConsumo({
        ...selectedConsumo,
        [id]: value,
      });
    }
  };

  useEffect(() => {
    M.Modal.init(modalRef.current!);
    fetchConsumos();
  }, [update]);

  return (
    <div className="collection">
      {consumos.map((consumo) => (
        <div key={consumo.id} className="collection-item">
          <span>
            <strong>ID do Cliente:</strong> {consumo.clienteId}
          </span>
          <br />
          <span>
            <strong>ID do Produto:</strong> {consumo.produtoId}
          </span>
          <br />
          <span>
            <strong>Quantidade:</strong> {consumo.quantidade}
          </span>
          <br />
          <span>
            <strong>Data de Consumo:</strong> {consumo.dataConsumo}
          </span>
          <br />
          <button onClick={() => handleEditClick(consumo)}>Editar</button>
          <button onClick={() => deleteConsumo(consumo.id)}>Deletar</button>
        </div>
      ))}

      <div id="modal1" className="modal" ref={modalRef}>
        <div className="modal-content">
          <h4>Editar Consumo</h4>
          {selectedConsumo && (
            <div className="row">
              <div className="input-field col s6">
                <input id="clienteId" type="text" value={selectedConsumo.clienteId.toString()} onChange={handleInputChange} />
                <label htmlFor="clienteId" className="active">ID do Cliente</label>
              </div>
              <div className="input-field col s6">
                <input id="produtoId" type="text" value={selectedConsumo.produtoId.toString()} onChange={handleInputChange} />
                <label htmlFor="produtoId" className="active">ID do Produto</label>
              </div>
              <div className="input-field col s6">
                <input id="quantidade" type="text" value={selectedConsumo.quantidade.toString()} onChange={handleInputChange} />
                <label htmlFor="quantidade" className="active">Quantidade</label>
              </div>
              <div className="input-field col s6">
                <input id="dataConsumo" type="text" value={selectedConsumo.dataConsumo} onChange={handleInputChange} />
                <label htmlFor="dataConsumo" className="active">Data de Consumo</label>
              </div>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat" onClick={() => updateConsumo(selectedConsumo!)}>Salvar</button>
          <button className="modal-close waves-effect waves-red btn-flat">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ListaConsumo;
