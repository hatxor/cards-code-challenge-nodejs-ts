import TYPES from './types';

import {Container} from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { CardRepositoryInterface } from './domain/Card/CardRepositoryInterface';
import { CardRepository } from './infrastructure/cardRepository';

const container = new Container();

container.bind<CardRepositoryInterface>(TYPES.CardRepository ).to(CardRepository).inSingletonScope();
export default container;