import { CardEntity } from './CardEntity'

export interface CardRepositoryInterface
{
    findAll();

    create(card: CardEntity);

    findById(id: string);

    update(id: string, card: CardEntity);

    delete(id: string);
}