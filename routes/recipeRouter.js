const recipeRouter = require('express').Router();

const {requestRecipes, requestSingleRecipe, addRecipe} = require('../controllers/recipe.controller.js')


recipeRouter.get('/', requestRecipes)
recipeRouter.post('/', addRecipe)

recipeRouter.get('/:id', requestSingleRecipe)


module.exports = recipeRouter