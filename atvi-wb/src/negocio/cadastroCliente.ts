import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
  private clientes: Cliente[];
  private entrada: Entrada;

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log("\nInício do cadastro do cliente");

    const nome = this.entrada.receberTexto("Informe o nome do cliente: ");
    const nomeSocial = this.entrada.receberTexto("Informe o nome social do cliente: ");
    const genero = this.entrada.receberTexto("Informe o gênero do cliente (padrão: M/F/outro): ");
    const cpfValor = this.entrada.receberTexto("Informe o número do cpf: ");
    const dataEmissaoTexto = this.entrada.receberTexto("Informe a data de emissão do cpf (padrão: dd/mm/yyyy) ");
    const partesData = dataEmissaoTexto.split('/');
    const ano = parseInt(partesData[2], 10);
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[0], 10);
    const dataEmissao = new Date(ano, mes - 1, dia);
    const cpf = new CPF(cpfValor, dataEmissao);
    const cliente = new Cliente(nome, nomeSocial, genero, cpf);
    this.clientes.push(cliente);

    console.log("\nCadastro concluído :)\n");
  }
}