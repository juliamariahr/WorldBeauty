import React, { useEffect, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import FormularioCadastroProduto from './formularioCadastroProduto';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

type Props = {
  tema: string;
};

const ListaProduto: React.FC<Props> = ({ tema }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const estilo = `collection-item active ${tema}`;

  const fetchProdutos = async () => {
    try {
      const response = await axios.get<Produto[]>('http://localhost:32832/produtos');
      setProdutos(response.data);
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao carregar produtos:', error.message);
    }
  };

  const deleteProduto = async (id: number) => {
    try {
      await axios.delete(`http://localhost:32832/produtos/${id}`);
      setProdutos(produtos.filter(produto => produto.id !== id));
      alert('Produto deletado com sucesso!');
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao deletar produto:', error.message);
    }
  };

  const updateProduto = async (produto: Produto) => {
    try {
      const response = await axios.put<Produto>(`http://localhost:32832/produtos/${produto.id}`, produto);
      setProdutos(produtos.map(p => (p.id === produto.id ? response.data : p)));
      setSelectedProduto(null);
      const instance = M.Modal.getInstance(modalRef.current!);
      instance.close();
    } catch (err) {
      const error = err as AxiosError;
      console.error('Erro ao atualizar produto:', error.message);
    }
  };

  const handleEditClick = (produto: Produto) => {
    setSelectedProduto(produto);
    const instance = M.Modal.getInstance(modalRef.current!);
    instance.open();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedProduto) {
      const { id, value } = e.target;
      setSelectedProduto({
        ...selectedProduto,
        [id]: value,
      });
    }
  };

  useEffect(() => {
    M.Modal.init(modalRef.current!);
    fetchProdutos();
  }, []);

  return (
    <div className="collection">
      <FormularioCadastroProduto tema={tema} onProdutoCadastrado={fetchProdutos} />
      {produtos.map((produto) => (
        <div key={produto.id} className="collection-item">
          <span>
            <strong>ID:</strong> {produto.id}
          </span>
          <br />
          <span>
            <strong>Nome:</strong> {produto.nome}
          </span>
          <br />
          <span>
            <strong>Preço:</strong> {produto.preco}
          </span>
          <br />
          <button onClick={() => handleEditClick(produto)}>Editar</button>
          <button onClick={() => deleteProduto(produto.id)}>Deletar</button>
        </div>
      ))}

      <div id="modal1" className="modal" ref={modalRef}>
        <div className="modal-content">
          <h4>Editar Produto</h4>
          {selectedProduto && (
            <>
              <input id="nome" type="text" value={selectedProduto.nome} onChange={handleInputChange} />
              <label htmlFor="nome" className="active">Nome do Produto</label>
              <input id="preco" type="text" value={selectedProduto.preco.toString()} onChange={handleInputChange} />
              <label htmlFor="preco" className="active">Preço</label>
            </>
          )}
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat" onClick={() => updateProduto(selectedProduto!)}>Salvar</button>
          <button className="modal-close waves-effect waves-red btn-flat">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ListaProduto;
