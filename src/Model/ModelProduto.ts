export class ModelProduto {
    private product

    constructor(produto:any) {
      this.product = produto;
    }
  
    public async cadastrarProduto(dadosProduto: any) {
        const novoProduto = new this.product({
          nome: dadosProduto.nome,
          quantidade: dadosProduto.quantidade,
          preco: dadosProduto.preco,
        });
      
        const produtoCadastrado = await novoProduto.save();
        return produtoCadastrado;
    }

    public async listarProdutos() {
        const produtos = await this.product.find({});
        return produtos;
    }

    public async deletarProduto(id: string) {
        const podutoRemovido = await this.product.findOneAndDelete({ _id: id });
        return podutoRemovido;
    }

    public async buscarProduto(id: string) {
        console.log(id);
        const produtoEncontrado = await this.product.findOne({ _id: id });
        return produtoEncontrado;
      }
  }