import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";
import Entrada from "../io/entrada";

export default class AtualizarCliente {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    this.clientes = clientes;
  }

  public atualizar(): void {
    const entrada = new Entrada();
    const nomeCliente = entrada.receberTexto(
      "\nEscreva o primeiro nome do cliente que você deseja atualizar: "
    );

    const cliente = this.clientes.find(
      (cliente) => cliente.nome === nomeCliente
    );

    if (cliente) {
      console.log("1 - Nome");
      console.log("2 - Nome Social");
      console.log("3 - Gênero");
      const opcao = entrada.receberNumero(
        "Digite o número da informação que você deseja atualizar: "
      );

      switch (opcao) {
        case 1:
          const novoNome = entrada.receberTexto("Digite o novo nome do cliente: ");
          cliente.nome = novoNome;
          break;
        case 2:
          const novoNomeSocial = entrada.receberTexto(
            "Digite o novo nome social do cliente: "
          );
          cliente.nomeSocial = novoNomeSocial;
          break;
        case 3:
          const novoGenero = entrada.receberTexto("Digite o novo gênero do cliente: ");
          cliente.genero = novoGenero;
        default:
          console.log("Opção inválida!\n");
      }

      console.log("\nCliente atualizado com sucesso.\n");
    } else {
      console.log("\nCliente não encontrado!\n");
    }
  }
}