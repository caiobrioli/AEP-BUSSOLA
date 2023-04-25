import { Request, Response } from 'express'
import ProdutoService from '../Services/Produtos/ProdutoService'

class ProdutoController{

    public async cadastrarProduto(request: Request, response: Response) {
        console.log(request.body);
        try {
          const json = request.body;
          const produto = await ProdutoService.cadastrarProduto(json);
          response.status(201).json(produto);
        } catch (error: unknown) {
          if (error instanceof Error) {
            response.status(500).json({ error: error.message });
          } else {
            response.status(500).json({ error: 'Erro desconhecido.' });
          }
        }
    }
    
    public async listarProdutos(req :Request,response: Response){
        try {
            const produtoList = await ProdutoService.listarProdutos();
            response.status(201).send(produtoList);
          } catch (error: unknown) {
            if (error instanceof Error) {
              response.status(500).json({ error: error.message });
            } else {
              response.status(500).json({ error: 'Erro desconhecido.' });
            }
          }
    }

    public async escreverProdutosEmArquivo(req :Request,response: Response){
        try {
            const produtoList = await ProdutoService.escreverProdutosEmArquivo();
            response.status(201).send(produtoList);
          } catch (error: unknown) {
            if (error instanceof Error) {
              response.status(500).json({ error: error.message });
            } else {
              response.status(500).json({ error: 'Erro desconhecido.' });
            }
          }
    }

    public async deletarProduto(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await ProdutoService.deletarProduto(id);
            if (result) {
                res.sendStatus(204);
            } else {
                res.status(404).json({ error: `produto com id ${id} não encontrada.` });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido.' });
            }
        }
    }

    public async buscarProduto(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const produto = await ProdutoService.buscarProduto(id);
            if (produto) {
                res.json(produto);
            } else {
                res.status(404).json({ error: `produto com id ${id} não encontrada.` });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro desconhecido.' });
            }
        }
    }


    
}

export default new ProdutoController()
