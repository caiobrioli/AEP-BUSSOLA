import { ModelProduto } from '../../Model/ModelProduto';
import fs from 'fs';
class ProdutoService{
    private produto

    public constructor(){
        this.produto = require('../../Model/Produto/ProductSchema');
    }

    public async cadastrarProduto(dadosProduto: any){
        return await new ModelProduto(this.produto).cadastrarProduto(dadosProduto)
    }

    public async listarProdutos(){
        return await new ModelProduto(this.produto).listarProdutos()
    }

    public async deletarProduto(id: any){
        return await new ModelProduto(this.produto).deletarProduto(id)
    }

    public async buscarProduto(id: any){
        return await new ModelProduto(this.produto).buscarProduto(id)
    }

    public async escreverProdutosEmArquivo() {
        const produtos = await new ModelProduto(this.produto).listarProdutos();
        const texto = JSON.stringify(produtos);
        fs.writeFileSync('produtos.txt', texto);
    }
}

export default new ProdutoService()