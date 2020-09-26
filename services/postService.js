const PostModel = require('../models/Post');

const getAll = async (page = 1) => {
  const PAGE_SIZE = 2;
  const skip = (page - 1) * PAGE_SIZE;
  let total = 0;

  await PostModel.estimatedDocumentCount((_, count) => {
    total = count;
  });
  const posts = await PostModel.find()
    .sort({ date: -1 })
    .skip(skip)
    .limit(PAGE_SIZE);

  return {
    page,
    per_page: PAGE_SIZE,
    total,
    total_pages: Math.floor(total / PAGE_SIZE),
    data: posts,
  };
};

module.exports.getAllPosts = getAll;
