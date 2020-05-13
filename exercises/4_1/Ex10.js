let custoDoProduto = 1;
let valorDeVenda = 3;
let lucro;

if (custoDoProduto < 0 || valorDeVenda < 0) {
  console.log("Erro");
} else
lucro = (valorDeVenda - custoDoProduto * 1.2)*1000;

console.log(lucro);