import { injectable } from "inversify";
import { CardEntity } from '../domain/Card/CardEntity'
import { CardRepositoryInterface } from '../domain/Card/CardRepositoryInterface'

@injectable()
export class MongooseCardRepository implements CardRepositoryInterface
{
    public findAll(): CardEntity[]
    {
        const movidas: CardEntity[] = [new CardEntity('Hola')];
        return movidas;
    }

    public create(card: CardEntity)
    {
        //
    }

    public findById(id: string): CardEntity | void
    {
        const card: CardEntity = new CardEntity('Hola');
        card.id = id;
        return card;
    }

    public update(id: string, card: CardEntity)
    {
        //
    }

    public delete(id: string)
    {
        //
    }
}