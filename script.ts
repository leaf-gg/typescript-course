type NumberOrString = string | number;

let total: NumberOrString = 20;
total = '30';

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

interface ProdutoInterface {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: ProdutoInterface) {
  document.body.innerHTML += `
  <div>
    <h2>Nome: ${dados.nome}</h2>
    <p>Preço: ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'} </p>
</div>
  `;
}

const computador: Produto = {
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

type Categorias = 'design' | 'código' | 'descod';

function pintarCategoria(categoria: Categorias) {
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

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}
interface DataApi {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: DataApi) {
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
