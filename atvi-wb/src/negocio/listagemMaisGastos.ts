import Cliente from "../modelo/cliente";

export default class CincoMaioresGastadores {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    this.clientes = clientes;
  }

  public rankingMaisGastos(): void {
    const clientesComTotalGasto = this.clientes.map((cliente) => ({
      cliente,
      totalGasto: cliente.getProdutosConsumidos.reduce(
        (acumulado, produto, indice) => acumulado + produto.preco * cliente.getQuantidadeProdutosConsumidos[indice],
        0
      ),
    }));

    clientesComTotalGasto.sort((a, b) => b.totalGasto - a.totalGasto);

    console.log("Top 5 clientes que mais gastaram:");

    clientesComTotalGasto.slice(0, 5).forEach((cliente, indice) => {
      console.log(`${indice + 1}. ${cliente.cliente.nome}: R$ ${cliente.totalGasto.toFixed(2)}`);
    });

    console.log("\n");
  }
}