import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
  private entrada: Entrada;
  private produtos: Produto[];

  constructor(produtos: Produto[]) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log("Iniciando o cadastro de um produto");

    const nome = this.entrada.receberTexto("Digite o nome do produto: ");
    const preco = this.entrada.receberNumero("Digite o preço do produto: ");
    const produto = new Produto(nome, preco);
    this.produtos.push(produto);

    console.log("\nProduto cadastrado com sucesso!\n");
  }
}