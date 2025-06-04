class Carrinho{

    constructor() {
        this.itens = [];
        this.total = 0;
        this.quantidade = 0;
    }

    adicionarItem(item){
        if(!item || !item.nome || !item.preco || item.quantidade) {
            throw new Error('Digite um item válido');
        }else{
            this.itens.push(item);
        }
    }

    listarItens() {
        if(!this.itens.length) {
            throw new Error('Carrinho vazio');
        }
        return this.itens;  
        
    }

    calcularTotal(){
        if(!this.itens.length) {
            throw new Error('Carrinho vazio');
        }
        this.total = this.itens.reduce((acc, item) => acc + item.preco, 0);
        return this.total;
    }

    removerItem(nome){
        if(!nome) {
            throw new Error('Digite um nome válido');
        }
        const index = this.itens.findIndex(item => item.nome === nome);
        if(index === -1) {
            throw new Error('Item não encontrado no carrinho');
        }
        this.itens.splice(index, 1);
    }

    limparCarrinho(){
        if(!this.itens.length) {
            throw new Error('Carrinho já está vazio');
        }
        this.itens = [];
        this.total = 0;
    }

    atualizarQuantidadeItem(nome, novaQuantidade){
        if(!nome || typeof novaQuantidade !== 'number' || novaQuantidade <= 0) {
            throw new Error('Digite um nome e quantidade válidos');
        }
        const item = this.itens.find(item => item.nome === nome);
        if(!item) {
            throw new Error('Item não encontrado no carrinho');
        }
        item.quantidade = novaQuantidade;
    }
}

module.exports = Carrinho;