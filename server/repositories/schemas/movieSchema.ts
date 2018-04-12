import * as mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    url: { type: String },
    active: { type: Boolean }
});

export default MovieSchema;