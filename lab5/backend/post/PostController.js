import PostService from "./PostService.js";

class PostController {

    async createPost(req, res) {
        try {
            const post = await PostService.createPost(req.body);
            res.status(201).json({ success: true, data: post });
        } catch (error) {
            res.status(500).json(error);
        }
    };
    
    async getPosts(_, res) {
        try {
            const posts = await PostService.getPosts();
            res.status(200).json({ success: true, data: posts });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };

    async getPost(req, res) {
        try {
            const posts = await PostService.getPost(req.params.id);
            res.status(200).json({ success: true, data: posts });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };
    
    async updatePost(req, res) {
        try {
            const post = await PostService.updatePost(req.params.id, req.body, true);
            res.status(200).json({ success: true, data: post });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };
    
    async deletePost(req, res) {
        try {
            await PostService.deletePost(req.params.id);
            res.status(204).json({ success: true, data: null });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };
    
    async getPostsJSON(_, res) {
        try {
            const posts = await PostService.getPosts();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    };
}

export default new PostController();