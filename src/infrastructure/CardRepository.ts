import { injectable } from "inversify";
import { CardEntity } from '../domain/Card/CardEntity'
import { CardRepositoryInterface } from '../domain/Card/CardRepositoryInterface'

@injectable()
export class CardRepository implements CardRepositoryInterface {
    public findAll() {
        const movidas: CardEntity[] = [{id: 5, title: "hola"}];
        return movidas;
    }

    public create(post: CardEntity) {
        //
    }

    public findById(id: number) {
        //
    }

    public update(id: number, post: CardEntity) {
        //
    }

    public delete(id: number) {
        //
    }
}