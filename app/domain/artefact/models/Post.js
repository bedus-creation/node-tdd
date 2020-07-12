import { Schema } from 'mongoose';
import connection from '@bootstrap/database'

/**
 * Posts model schema.
 */
const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String }
});

export default connection.model('Post', PostSchema);