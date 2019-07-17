const express = require('express');
const router = express.Router();

// Import model
const Post = require('../models/Post');

// Fetch all the post
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({ message: errr });
    }
});

// Add new post
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({message: err});
    });
});

// Fetch specific post
router.get('/:postId', async (req, res)=>{
    try{
        const singlePost = await Post.findById(req.params.postId);
        res.json(singlePost);
    }catch(err){
        res.json({ message: errr });
    }
});

// Delete a Post
router.delete('/:postId', async (req, res)=>{
    try{
        const removedPost = await Post.remove({ _id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({ message: errr });
    }
});

// Update a specific post
router.patch('/:postId', async (req, res)=>{
    try{
        const updatePost = await Post.updateOne(
            { _id: req.params.postId},
            { $set: { title: req.body.title }}
        );
        res.json(updatePost);
    }catch(err){
        res.json({ message: errr });
    }
});


module.exports = router;