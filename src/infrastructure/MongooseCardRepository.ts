import { injectable } from "inversify";
import mongoose from 'mongoose';
import CardEntity from '../domain/Card/CardEntity'
import { CardRepositoryInterface } from '../domain/Card/CardRepositoryInterface'

@injectable()
export class MongooseCardRepository implements CardRepositoryInterface
{
    public findAll()
    {
        return mongoose.model('CardEntity').find().exec();
    }

    public create(card: CardEntity)
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
    }
}