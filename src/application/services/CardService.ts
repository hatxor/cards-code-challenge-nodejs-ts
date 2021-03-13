import { injectable, inject } from "inversify";
import { CardRepositoryInterface } from '../../domain/Card/CardRepositoryInterface'
import CardEntity from '../../domain/Card/CardEntity'
import TYPES from '../../types';

@injectable()
export default class CardService
{
    @inject(TYPES.CardRepository) private cardRepository: CardRepositoryInterface;

    public findAll(): CardEntity[]
    {
        return this.cardRepository.findAll();
    }

    public findById(id: string): CardEntity | void
    {
        return this.cardRepository.findById(id);
    }
}