module.exports = {
    getComments (req,res){
        res.status(200).json(req.store.posts[req.params.postId].comments)
    },
    addComment (req,res){       req.store.posts[req.params.postId].comments.push(req.body)
        res.status(201).send({id : req.store.posts[req.params.postId].comments.length-1})
    },
    updateComment (req,res){
        req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId] )
    },
    deleteComment (req,res){
        req.store.posts[req.params.postId].comments.splice(req.params.commentId,1)
        res.sendStatus(204)
    }
}
