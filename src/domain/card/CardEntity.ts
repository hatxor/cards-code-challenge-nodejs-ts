import { v4 } from 'uuid';

export class CardEntity
{
    private _id: string;

    private title: string;

    public constructor(title: string)
    {
        this._id = v4();
        this.title = title;
    }

    set id(id: string)
    {
        this._id = id;
    }

    get id()
    {
        return this._id;
    }
}