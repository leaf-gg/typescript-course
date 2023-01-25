"use strict";
let total = 20;
total = '30';
/* function preencherDados(dados: ProdutoInterface) {
  document.body.innerHTML += `
  <div>
    <h2>Nome: ${dados.nome}</h2>
    <p>Preço: ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'} </p>
</div>
  `;
}
*/
const computador = {
    nome: 'Computador',
    preco: 2000,
    teclado: true,
};
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
    // showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <p>${data.nome}</p>
      <p>${data.preco}</p>
      <p>${data.descricao}</p>
      <p>${data.garantia} anos</p>
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
const a = [10, 20, 'akira'];
function loadAkira(data) {
    return data.filter((n) => n > 10 || n === 'akira');
}
// console.log(loadAkira(a));
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(data) {
    data.forEach((curso) => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
    <div>
      <p style="color: ${color};">${curso.nome}</p> 
      <p>${curso.horas}</p> 
      <p>${curso.aulas}</p> 
      <p>Tipo : ${curso.gratuito}</p> 
      <p>${curso.tags.join(', ')}</p> 
      <p>${curso.nivel}</p> 
    </div>
    `;
    });
}
