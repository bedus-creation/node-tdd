import PostModel from '@domain/artefact/models/Post'

const PostCreateAction = async (data) => {
    await PostModel.create(data);
}

export default PostCreateAction;