class Carrinho{

    constructor() {
        this.itens = [];
        this.total = 0;
    }

    adicionarItem(item){
        this.itens.push(item)
    }
}

module.exports = Carrinho;