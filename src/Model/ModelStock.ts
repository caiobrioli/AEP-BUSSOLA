
export class ModelStock {
    private product

    constructor(produto:any) {
        this.product = produto;
    }

    public async cadastrarProdutoNovo(produtos: any) {
        const produtosCadastrados = [];
        for (const produto of produtos) {
          const novoProduto = new this.product({
            id: produto.id,
            nome: produto.nome,
            quantidade: produto.quantidade,
            preco: produto.preco,
            stockValue: produto.stockValue
          });
          const produtoCadastrado = await novoProduto.save();
          produtosCadastrados.push(produtoCadastrado);
        }
        return produtosCadastrados;
      }

      public async buscaDezRetorneQuatroAleatorios() {
        const produtosEncontrados = await this.product.aggregate([
            { $sample: { size: 10 } },
            { $limit: 4 },
            { $project: { _id: 1, nome: 1, quantidade: 1, preco: 1, stockValue: 1 } }
          ]).exec();
          
          return produtosEncontrados;
      }
  }