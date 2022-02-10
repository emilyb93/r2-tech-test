const recipeRouter = require('express').Router();

const {requestRecipes, requestSingleRecipe} = require('../controllers/recipe.controller.js')


recipeRouter.get('/', requestRecipes)

recipeRouter.get('/:id', requestSingleRecipe)

module.exports = recipeRouter