import Cliente from "../modelo/cliente";

export default class listagemMaisConsumido {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    this.clientes = clientes;
  }

  public rankingMaisConsumido(): void {
    const clientesComTotalGasto = this.clientes.map((cliente) => {
      let totalGasto = 0;
      for (const produto of cliente.getProdutosConsumidos) {
        totalGasto += produto.preco * cliente.getQuantidadeProdutosConsumidos[cliente.getProdutosConsumidos.indexOf(produto)];
      }
      return { cliente, totalGasto };
    });

    // Classifica os clientes pelo valor total gasto
    clientesComTotalGasto.sort((a, b) => b.totalGasto - a.totalGasto);

    console.log("Top 5 clientes que mais gastaram:");

    // Lista os 5 principais clientes
    for (let i = 0; i < Math.min(5, clientesComTotalGasto.length); i++) {
      console.log(`${i + 1}. ${clientesComTotalGasto[i].cliente.nome}: ${clientesComTotalGasto[i].totalGasto.toFixed(2)}`);
    }

    console.log("\n");
  }
}