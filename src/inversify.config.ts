import TYPES from './types';

import {Container} from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { CardRepositoryInterface } from './domain/Card/CardRepositoryInterface';
import { MongooseCardRepository } from './infrastructure/MongooseCardRepository';
import CardService from './application/services/CardService'

const container = new Container();

container.bind<CardRepositoryInterface>(TYPES.CardRepository ).to(MongooseCardRepository).inSingletonScope();
container.bind<CardService>(TYPES.CardService ).to(CardService).inSingletonScope();
export default container;