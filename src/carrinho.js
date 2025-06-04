class Carrinho{

    constructor() {
        this.itens = [];
        this.total = 0;
    }

    adicionarItem(item){
        this.itens.push(item)
    }

    listarItens() {
        // return this.itens;
    }

    calcularTotal(){
    }

    removerItem(nome){
    }

    limparCarrinho(){

    }

    atualizarQuantidadeItem(nome, novaQuantidade){

    }


}

module.exports = Carrinho;