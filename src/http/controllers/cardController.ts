import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, requestParam } from "inversify-express-utils";
import TYPES from '../../types';
import { inject } from 'inversify';
import CardService from '../../application/services/CardService'

@controller("/cards")
export class CardController implements interfaces.Controller {

    private cardService: CardService;

    constructor(@inject(TYPES.CardService) cardService: CardService) {
        this.cardService = cardService;
    }

  @httpGet("/")
  public async index(@request() req: express.Request, @response() res: express.Response) {
    try {
      const cards = await this.cardService.findAll();
      res.status(200).json(cards);
    } catch(error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:id")
    private async show(@requestParam("id") id: string, @response() res: express.Response)
    {
      try {
        const card = await this.cardService.findById(id);
        res.status(200).json(card);
      } catch(error) {
        res.status(400).json(error);
      }
    }
}