const assert = require('assert');
const  Carrinho  = require('../src/carrinho');

describe('Carrinho de compras', () => {
    it('deve adicionar um item ao carrinho', () => {
        const carrinho = new Carrinho();
        const item = { nome: 'Produto 1', preco: 100 };
        
        carrinho.adicionarItem(item);
        assert.strictEqual(carrinho.itens.length, 1);
        assert.strictEqual(carrinho.itens[0].nome, 'Produto 1');
    });
})