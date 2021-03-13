import mongoose from 'mongoose';

export const cardSchema = new mongoose.Schema({
    name: String
});

export const cardModel = mongoose.model('Card', cardSchema);