import { injectable } from "inversify";
import mapper from '../mapper';
import { CardEntity } from '../../../../domain/card/CardEntity';
import { cardModel } from '../schemas/CardSchema';
import { CardRepositoryInterface } from '../../../../domain/card/CardRepositoryInterface'

@injectable()
export class CardRepository implements CardRepositoryInterface
{
    public findAll()
    {
        const docs = cardModel.find({})
        // return mapper.toDomainModel(docs, CardEntity);
        // return docs.map(mapper.toDomainModel(CardEntity));
        return docs;
    }

    /*public create(card: CardEntity)
    {
        //
    }

    public findById(id: string)
    {
        return mongoose.model('User').findById(id, cb);
    }

    public update(id: string, card: CardEntity)
    {
        //
    }

    public delete(id: string)
    {
        //
    }*/
}