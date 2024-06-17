import Produto from "../modelo/produto";
import Deletar from "./deletar";
import Entrada from "../io/entrada";

export default class DeletarProduto extends Deletar {
  private produtos: Produto[];

  constructor(produtos: Produto[]) {
    super();
    this.produtos = produtos;
  }

  public deletar(): void {
    const entrada = new Entrada();
    const nomeProduto = entrada.receberTexto("Escreva o nome do produto que você deseja deletar: ");

    const index = this.produtos.findIndex((produto) => produto.nome === nomeProduto);

    if (index !== -1) {
      this.produtos.splice(index, 1);
      console.log(`\nProduto ${nomeProduto} deletado com sucesso.\n`);
    } else {
      console.log("\nEste produto não foi encontrado!\n");
    }
  }
}