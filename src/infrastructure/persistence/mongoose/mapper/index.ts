// tslint:disable-next-line:no-shadowed-variable
export const toDatabase = function toDatabase() {
    // TODO
};

// tslint:disable-next-line:no-shadowed-variable
export const toDomainModel = function toDomainModel(databaseDoc, DomainModel) {
    return new DomainModel(databaseDoc);
};