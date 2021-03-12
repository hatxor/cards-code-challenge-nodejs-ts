import { injectable } from "inversify";

interface Post {
    id: number,
    title: string
}

@injectable()
export class PostRepositoryImpl {
    findAll() {
        const movidas: Post[] = [{id: 5, title: "hola"}];
        return movidas;
    }

    create(post: Post) {
        //
    }

    findById(id: number) {
        //
    }

    update(id: number, post: Post) {
        //
    }

    delete(id: number) {
        //
    }
}