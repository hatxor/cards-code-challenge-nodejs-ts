import { CardEntity } from './CardEntity'

export interface CardRepositoryInterface
{
    findAll();

    create(card: CardEntity);

    findById(id: number);

    update(id: number, card: CardEntity);

    delete(id: number);
}