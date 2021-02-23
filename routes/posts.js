const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//@route     GET api/posts
//@desc      Get all posts
//@access    Private
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route     POST api/posts
//@desc      Add new post
//@access    Private
router.post('/add', async (req, res) => {
        const { title, description } = req.body;
        try {
            const newPost = new Post({
                title,
                description
            });

            const post = await newPost.save();
            res.json(post);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

    module.exports = router;