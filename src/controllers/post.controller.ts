import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response } from "inversify-express-utils";
import TYPES from '../types';
import { PostRepositoryImpl } from '../infrastructure/PostRepositoryImpl'; // This should be the interface
import { inject } from 'inversify';

@controller("/posts")
export class PostController implements interfaces.Controller {

    private postRepository: PostRepositoryImpl;

    constructor(@inject(TYPES.PostRepositoryImpl) postRepository: PostRepositoryImpl) {
        this.postRepository = postRepository;
    }

  @httpGet("/")
  public async index (@request() req: express.Request, @response() res: express.Response) {
    try {
      const posts = await this.postRepository.findAll();
      res.status(200).json(posts);
    } catch(error) {
      res.status(400).json(error);
    }
  }
}