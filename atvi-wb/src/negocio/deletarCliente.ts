import Cliente from "../modelo/cliente";
import Deletar from "./deletar";
import Entrada from "../io/entrada";

export default class DeletarCliente extends Deletar {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
  }

  public deletar(): void {
    const entrada = new Entrada();
    const nomeCliente = entrada.receberTexto("Escreva o primeiro nome do cliente que você deseja deletar: ");

    const index = this.clientes.findIndex((cliente) => cliente.nome === nomeCliente);

    if (index !== -1) {
      this.clientes.splice(index, 1);
      console.log(`\nCliente ${nomeCliente} deletado com sucesso.\n`);
    } else {
      console.log("\nEste cliente não foi encontrado!\n");
    }
  }
}