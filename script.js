"use strict";
let total = 20;
total = '30';
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>Nome: ${dados.nome}</h2>
    <p>Preço: ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'} </p>
</div>
  `;
}
const computador = {
    nome: 'Computador',
    preco: 2000,
    teclado: true,
};
preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: true,
});
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false,
});
function pintarCategoria(categoria) {
    console.log('categoria', categoria);
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    }
}
pintarCategoria('design');
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <p>${data.nome}</p>
      <p>${data.preco}</p>
      <p>${data.descricao}</p>
      <p>${data.garantia}</p>
      <p>${data.seguroAcidentes}</p>
      <p>${data.empresaFabricante.nome}</p>
      <p>${data.empresaFabricante.fundacao}</p>
      <p>${data.empresaFabricante.pais}</p>
      <p>${data.empresaMontadora.nome}</p>
      <p>${data.empresaMontadora.fundacao}</p>
      <p>${data.empresaMontadora.pais}</p>
      
    </div>
  `;
}
