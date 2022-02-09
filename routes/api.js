const apiRouter = require('express').Router();
const recipeRouter = require('./recipeRouter.js')

apiRouter.get('/', (_, res) => {
  res.json({ message: 'ok' });
});

apiRouter.use('/recipes', recipeRouter)

module.exports = apiRouter;
