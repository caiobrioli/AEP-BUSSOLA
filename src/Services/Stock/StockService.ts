import { ModelProduto } from '../../Model/ModelProduto';
import { ModelStock } from '../../Model/ModelStock';
class StockService{
    private produto
    private produtoAntigo
    public constructor(){
        this.produto = require('../../Model/Stock/StockSchema');
        this.produtoAntigo = require('../../Model/Produto/ProductSchema');
    }

    public async listarProdutosAnteriores(){
        return await new ModelProduto(this.produtoAntigo).listarProdutos()
    }

    public async cadastrarProdutoNovo(dadosProduto: any){
        return await new ModelStock(this.produto).cadastrarProdutoNovo(dadosProduto)
    }

    public async servicoAdicionarValorEstoqueSalvarTabela(): Promise<{ produtos: { quantidade: number; preco: number; stockValue: number }[] }> {
        const produtos = await this.listarProdutosAnteriores();
        //adiciona a chave StockValue
        const produtosComValor = produtos.map((produto:any) => ({
            nome: produto.nome,
            quantidade: produto.quantidade,
            preco: produto.preco,
            stockValue: produto.preco * produto.quantidade,
          }));
          
        const produtoCadastrado = await new ModelStock(this.produto).cadastrarProdutoNovo(produtosComValor)
        
        return { produtos: produtoCadastrado };
      }

    public async buscaDezRetorneQuatroAleatorios(){
        return await new ModelStock(this.produtoAntigo).buscaDezRetorneQuatroAleatorios()
    }

    public async listarValorTotalEstoque() {
        const produtos = await this.produto.find({});
        const produtosComValor = produtos.map((produto:any) => ({
          nome: produto.nome,
          quantidade: produto.quantidade,
          preco: produto.preco,
          stockValue: produto.preco * produto.quantidade,
        }));
        const stockValueTotal = produtosComValor.reduce((total:any, produto:any) => total + produto.stockValue, 0);
        return {stockValueTotal };
      }

}

export default new StockService()