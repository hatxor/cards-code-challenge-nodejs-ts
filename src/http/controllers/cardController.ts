import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, requestParam } from "inversify-express-utils";
import TYPES from '../../types';
import { inject } from 'inversify';
import { CardRepositoryInterface } from '../../domain/Card/CardRepositoryInterface';

@controller("/cards")
export class CardController implements interfaces.Controller {

    private cardRepository: CardRepositoryInterface;

    constructor(@inject(TYPES.CardRepository) cardRepository: CardRepositoryInterface) {
        this.cardRepository = cardRepository;
    }

  @httpGet("/")
  public async index(@request() req: express.Request, @response() res: express.Response) {
    try {
      const cards = await this.cardRepository.findAll();
      res.status(200).json(cards);
    } catch(error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:id")
    private async show(@requestParam("id") id: string, @response() res: express.Response)
    {
      try {
        const card = await this.cardRepository.findById(id);
        res.status(200).json(card);
      } catch(error) {
        res.status(400).json(error);
      }
    }
}