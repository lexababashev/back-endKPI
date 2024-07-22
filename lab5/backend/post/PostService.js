import Post from "./Post.js";

class PostService {
    async createPost(postData) {
        const post = await Post.create(postData);
        return post;
    };
    
    async getPosts() {
        const posts = await Post.find();
        return posts;
    };

    async getPost(id) {
        if (!id) throw new Error('ID is required');
        const post = await Post.findById(id);
        return post;
    }
    
    async updatePost(id, postData, isNew) {
        if (!id) throw new Error('ID is required');
        const post = await Post.findByIdAndUpdate(id, postData, { new: isNew });
        return post;
    };
    
    async deletePost(id) {
        if (!id) throw new Error('ID is required');
        const post = await Post.findByIdAndDelete(id);
        return post;
    };
}

export default new PostService();