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

    it('deve listar os itens do carrinho', () => {
        const carrinho = new Carrinho();
        const item1 = { nome: 'Produto 1', preco: 100 };
        const item2 = { nome: 'Produto 2', preco: 50 };

        carrinho.adicionarItem(item1);
        carrinho.adicionarItem(item2);

        const itens = carrinho.listarItens();

        assert.strictEqual(itens.length, 2);
        assert.deepStrictEqual(itens[0], item1);
        assert.deepStrictEqual(itens[1], item2);
    });

    it('deve calcular o total do carrinho', () => {
        const carrinho = new Carrinho();
        const item1 = { nome: 'Produto 1', preco: 100 };
        const item2 = { nome: 'Produto 2', preco: 50 };

        carrinho.adicionarItem(item1);
        carrinho.adicionarItem(item2);

        const total = carrinho.calcularTotal();

        assert.strictEqual(total, 150);
    });

    it('deve remover um item do carrinho', () => {
        const carrinho = new Carrinho();
        const item1 = { nome: 'Produto 1', preco: 100 };
        const item2 = { nome: 'Produto 2', preco: 50 };

        carrinho.adicionarItem(item1);
        carrinho.adicionarItem(item2);
        
        carrinho.removerItem('Produto 1');
        
        const itens = carrinho.listarItens();
        
        assert.strictEqual(itens.length, 1);
        assert.deepStrictEqual(itens[0], item2);
    });

    it('deve remover todos os itens do carrinho', () => {

        const carrinho = new Carrinho();
        const item1 = { nome: 'Produto 1', preco: 100 };
        const item2 = { nome: 'Produto 2', preco: 50 };

        carrinho.adicionarItem(item1);
        carrinho.adicionarItem(item2);
        
        carrinho.limparCarrinho();
        
        assert.strictEqual(carrinho.itens.length, 0);
    });
})