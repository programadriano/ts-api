import * as mongoose from 'mongoose';
import MovieSchema from './schemas/movieSchema';

export default mongoose.model('Movie', MovieSchema);
