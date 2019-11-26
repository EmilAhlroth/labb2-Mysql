module.exports = {
    getPosts (req,res){
        res.status(200).json(req.store.posts)
    },
    addPost (req,res){
        req.store.posts.push(req.body)
        res.status(201).send({id : req.store.posts.length-1})
    },
    updatePost (req,res){
        req.store.posts[req.params.postId] = req.body
        res.status(200).send(req.store.posts[req.params.postId])
    },
    deletePost (req,res){
        req.store.posts.splice(req.params.postId,1)
        res.sendStatus(204)
    }
}
