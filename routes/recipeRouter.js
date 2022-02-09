const recipeRouter = require('express').Router();

const {requestRecipes} = require('../controllers/recipe.controller.js')


recipeRouter.get('/', requestRecipes)

module.exports = recipeRouter