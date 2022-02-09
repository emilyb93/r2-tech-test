const {requestRecipes} = require('../models/recipe.model.js')


exports.requestRecipes = async (req,res,next)=>{
   const recipes = await fetchRecipes()
   console.log(recipes)
}