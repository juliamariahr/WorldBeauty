import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class AtualizarProduto {
  private produtos: Produto[];

  constructor(produtos: Produto[]) {
    this.produtos = produtos;
  }

  public atualizar(): void {
    const entrada = new Entrada();
    const nomeProduto = entrada.receberTexto("Escreva o nome do produto que você deseja atualizar: ");

    const produto = this.produtos.find((produto) => produto.nome === nomeProduto);

    if (produto) {
      console.log("1 - Nome");
      console.log("2 - Preço");
      const opcao = entrada.receberNumero("Digite o número da informação que você deseja atualizar: ");

      switch (opcao) {
        case 1:
          const novoNome = entrada.receberTexto("Digite o novo nome do produto: ");
          produto.nome = novoNome;
          break;
        case 2:
          const novoPreco = entrada.receberNumero("Digite o novo preço do produto: ");
          produto.preco = novoPreco;
          break;
        default:
          console.log("Opção inválida!\n");
      }

      console.log("\nProduto atualizado com sucesso.\n");
    } else {
      console.log("\nProduto não encontrado!\n");
    }
  }
}