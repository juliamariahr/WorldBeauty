import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import insertProdutos from "./insertProdutos";

export default function insertClientes() {
    let clientes: Cliente[] = [];
    let produto = insertProdutos();

    // Homens

    let cliente1 = new Cliente("Leonardo", "Leonardo", "M", new CPF("98765", new Date(1995, 6, 12)));
    cliente1.adicionarProduto(produto[0]);
    cliente1.adicionarQuantidadeProduto(3);
    cliente1.adicionarProduto(produto[2]);
    cliente1.adicionarQuantidadeProduto(2);

    let cliente2 = new Cliente("Eduardo", "Eduardo", "M", new CPF("87654", new Date(1992, 3, 20)));
    cliente2.adicionarProduto(produto[5]);
    cliente2.adicionarQuantidadeProduto(4);
    let cliente3 = new Cliente("Vinicius", "Vinicius", "M", new CPF("76543", new Date(1998, 9, 15)));
    let cliente4 = new Cliente("Thiago", "Thiago", "M", new CPF("65432", new Date(1990, 11, 28)));
    let cliente5 = new Cliente("Henrique", "Henrique", "M", new CPF("54321", new Date(1996, 5, 1)));
    let cliente6 = new Cliente("Matheus", "Matheus", "M", new CPF("43210", new Date(1994, 2, 18)));
    let cliente7 = new Cliente("Rafael", "Rafael", "M", new CPF("32109", new Date(1991, 8, 25)));
    let cliente8 = new Cliente("Daniel", "Daniel", "M", new CPF("21098", new Date(1993, 4, 12)));
    let cliente9 = new Cliente("Bruno", "Bruno", "M", new CPF("10987", new Date(1997, 10, 5)));
    let cliente10 = new Cliente("Guilherme", "Guilherme", "M", new CPF("98765", new Date(1999, 1, 15)));
    let cliente11 = new Cliente("Gustavo", "Gustavo", "M", new CPF("87654", new Date(1992, 6, 20)));
    let cliente12 = new Cliente("Felipe", "Felipe", "M", new CPF("76543", new Date(1995, 3, 12)));
    cliente12.adicionarProduto(produto[1]);
    cliente12.adicionarQuantidadeProduto(2);
    let cliente13 = new Cliente("Ricardo", "Ricardo", "M", new CPF("65432", new Date(1990, 9, 18)));
    let cliente14 = new Cliente("Rodrigo", "Rodrigo", "M", new CPF("54321", new Date(1996, 11, 25)));

    // Mulheres
    
    let cliente15 = new Cliente("Alessandra", "Alessandra", "F", new CPF("43210", new Date(1994, 5, 1)));
    cliente15.adicionarProduto(produto[8]);
    cliente15.adicionarQuantidadeProduto(3);
    let cliente16= new Cliente("Juliana", "Juliana", "F", new CPF("32109", new Date(1991, 2, 18)));
    let cliente17 = new Cliente("Luana", "Luana", "F", new CPF("21098", new Date(1993, 8, 25)));
    let cliente18 = new Cliente("Beatriz", "Beatriz", "F", new CPF("10987", new Date(1997, 4, 12)));
    cliente18.adicionarProduto(produto[14]);
    cliente18.adicionarQuantidadeProduto(2);
    let cliente19 = new Cliente("Carolina", "Carolina", "F", new CPF("98765", new Date(1999, 6, 20)));
    let cliente20 = new Cliente("Fernanda", "Fernanda", "F", new CPF("87654", new Date(1992, 3, 15)));
    let cliente21 = new Cliente("Gabriela", "Gabriela", "F", new CPF("76543", new Date(1995, 9, 18)));
    let cliente22 = new Cliente("Daniela", "Daniela", "F", new CPF("65432", new Date(1990, 11, 28)));
    let cliente23 = new Cliente("Bruna", "Bruna", "F", new CPF("54321", new Date(1996, 2, 12)));
    let cliente24 = new Cliente("Camila", "Camila", "F", new CPF("43210", new Date(1994, 8, 25)));
    let cliente25 = new Cliente("Isabela", "Isabela", "F", new CPF("32109", new Date(1991, 5, 1)));
    let cliente26 = new Cliente("Larissa", "Larissa", "F", new CPF("21098", new Date(1993, 4, 12)));
    cliente26.adicionarProduto(produto[11]);
    cliente26.adicionarQuantidadeProduto(3);
    let cliente27 = new Cliente("Patricia", "Patricia", "F", new CPF("10987", new Date(1997, 10, 5)));
    let cliente28 = new Cliente("Adriana", "Adriana", "F", new CPF("98765", new Date(1999, 1, 15)));

    // Outros
    
    let cliente29 = new Cliente("Alexandre", "Alexandre", "outro", new CPF("87654", new Date(1992, 6, 20)));
    cliente29.adicionarProduto(produto[18]);
    cliente29.adicionarQuantidadeProduto(1);
    let cliente30 = new Cliente("Jordan", "Jordan", "outro", new CPF("76543", new Date(1995, 3, 12)));

    clientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, 
    cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20, 
    cliente21, cliente22, cliente23, cliente24, cliente25, cliente26, cliente27, cliente28, cliente29, cliente30);

    return clientes;
}