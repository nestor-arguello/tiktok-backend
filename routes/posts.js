const router = require('express').Router();
const Post = require('../models/Post');
const { postValidation } = require('../validation');
const { getAllPosts } = require('../services/postService');

router.get('/', async (request, response) => {
  try {
    const page = request.query.page || 1;
    const posts = await getAllPosts(parseInt(page));

    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.post('/', async (request, response) => {
  const { error } = postValidation(request.body);

  if (error) return response.status(400).send(error.details[0].message);

  const {
    url,
    channel,
    song,
    description,
    likes,
    messages,
    shares,
  } = request.body;
  const post = new Post({
    url,
    channel,
    song,
    description,
    likes,
    messages,
    shares,
  });

  try {
    const savedPost = await post.save();
    response.status(201).send(savedPost);
  } catch (error) {
    response.send(error);
    response.status(500).send(error);
  }
});

module.exports = router;
