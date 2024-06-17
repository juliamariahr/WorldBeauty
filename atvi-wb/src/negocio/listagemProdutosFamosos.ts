import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class ListagemProdutosFamosos {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    this.clientes = clientes;
  }

  public produtosMaisPopulares(): void {
    const entrada = new Entrada();
    const genero = entrada.receberTexto("\nDigite o gênero (M, F, outro, tudo): ").trim().toUpperCase();

    const contadorProdutos: { [nome: string]: number } = {};

    for (const cliente of this.clientes) {
      if (genero === "TUDO" || cliente.getGenero.toLowerCase() === genero.toLowerCase()) {
        for (const produto of cliente.getProdutosConsumidos) {
          const quantidade = cliente.getQuantidadeProdutosConsumidos[cliente.getProdutosConsumidos.indexOf(produto)];

          contadorProdutos[produto.nome] = (contadorProdutos[produto.nome] || 0) + quantidade;
        }
      }
    }

    console.log(`\nProdutos mais consumidos por clientes do gênero ${genero}:`);

    for (const nomeProduto in contadorProdutos) {
      console.log(`${nomeProduto}: ${contadorProdutos[nomeProduto]}`);
    }

    console.log("\n");
  }
}