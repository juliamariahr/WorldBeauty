import Produto from "../modelo/produto";

export default function insertProdutos() {
    let produtos: Produto[] = [];

    const produto1 = new Produto("Creme hidratante facial", 40.00);
    const produto2 = new Produto("Shampoo antifrizz", 25.00);
    const produto3 = new Produto("Máscara de cílios", 30.00);
    const produto4 = new Produto("Desodorante roll-on", 15.00);
    const produto5 = new Produto("Condicionador de cabelo", 20.00);
    const produto6 = new Produto("Base de maquiagem", 35.00);
    const produto7 = new Produto("Hidratante corporal", 28.00);
    const produto8 = new Produto("Creme de mãos", 18.00);
    const produto9 = new Produto("Gel de banho", 12.00);
    const produto10 = new Produto("Esmalte de unha", 20.00);
    const produto11 = new Produto("Gel para cabelo", 25.00);
    const produto12 = new Produto("Delineador de sobrancelhas", 22.00);
    const produto13 = new Produto("Rímel de cílios", 30.00);
    const produto14 = new Produto("Batom matte", 35.00);
    const produto15 = new Produto("Cera para depilação", 15.00);
    const produto16 = new Produto("Spray fixador de cabelo", 45.00);
    const produto17 = new Produto("Tinta pra cabelo", 30.00);
    const produto18 = new Produto("Chapinha de cabelo", 90.00);
    const produto19 = new Produto("Lápis de olho", 12.00);
    const produto20 = new Produto("Creme pós-barba", 25.00);

    produtos.push( produto1, produto2, produto3, produto4, produto5, produto6, produto7,
    produto8, produto9, produto10, produto11, produto12, produto13, produto14,
    produto15, produto16, produto17, produto18, produto19, produto20);

    return produtos;
}