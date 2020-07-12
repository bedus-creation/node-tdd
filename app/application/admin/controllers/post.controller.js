import PostCreateAction from '@domain/artefact/actions/PostCreateAction';
import PostModel from '@domain/artefact/models/Post'

class PostController {
    create = (req, res) => {
        res.send('hello world');
    }

    store = async (req, res) => {
        await PostCreateAction(req.body);
        res.redirect('back');
    }
}

export default new PostController