import TYPES from './types';

import {Container} from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { PostRepositoryImpl } from './infrastructure/PostRepositoryImpl'; // /repository/Post/PostRepositoryImpl

const container = new Container();

container.bind<PostRepositoryImpl>(TYPES.PostRepositoryImpl ).to(PostRepositoryImpl).inSingletonScope();
export default container;