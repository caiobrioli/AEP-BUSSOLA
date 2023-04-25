import { Request, Response } from 'express'
import StockService from '../Services/Stock/StockService'

class StockController{
    public async servicoAdicionarValorEstoqueSalvarTabela(req :Request,response: Response){
        try {
            const tabelaCadastrada= await StockService.servicoAdicionarValorEstoqueSalvarTabela();
            response.status(201).send(tabelaCadastrada);
          } catch (error: unknown) {
            if (error instanceof Error) {
              response.status(500).json({ error: error.message });
            } else {
              response.status(500).json({ error: 'Erro desconhecido.' });
            }
          }
    }

    public async buscaDezRetorneQuatroAleatorios(req :Request,response: Response){
        try {
            const produtoList = await StockService.buscaDezRetorneQuatroAleatorios();
            response.status(201).send(produtoList);
          } catch (error: unknown) {
            if (error instanceof Error) {
              response.status(500).json({ error: error.message });
            } else {
              response.status(500).json({ error: 'Erro desconhecido.' });
            }
          }
    }
    
    public async listarValorTotalEstoque(req :Request,response: Response){
        try {
            const produtoList = await StockService.listarValorTotalEstoque();
            response.status(201).send(produtoList);
          } catch (error: unknown) {
            if (error instanceof Error) {
              response.status(500).json({ error: error.message });
            } else {
              response.status(500).json({ error: 'Erro desconhecido.' });
            }
          }
    }
    
}

export default new StockController()