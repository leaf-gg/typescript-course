"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto('Neuromancer');
console.log(livro instanceof Array);
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'Akira') {
        return new Livro(' Sega Genesis', 'Katsuhiro Otomo');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
    return null;
}
const produto = buscarProduto('Dark Souls');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
/*
if (produto instanceof Jogo) {
  console.log(produto.jogadores);
}
*/
if (produto instanceof Produto) {
    console.log(produto.nome);
}
const honda = {
    nome: 'Honda',
};
console.log(honda);
const novoLink = document.getElementById('origamid');
if (novoLink instanceof HTMLAnchorElement) {
    // novoLink.href = 'https://www.origamid.com';
    novoLink.href = novoLink.href.replace('http://', 'https://');
}
console.log(novoLink, 'linknovo');
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement || link instanceof HTMLButtonElement) {
        link.style.border = '1px solid blue';
        link.style.color = 'blue';
        link.style.backgroundColor = 'red';
    }
});
