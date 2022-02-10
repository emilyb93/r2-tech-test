const {fetchRecipes, fetchSingleRecipe} = require('../models/recipe.model.js')


exports.requestRecipes = async (req,res)=>{
    const recipes =  await fetchRecipes(req.query)

    console.log(recipes.length)
    
    
    res.status(200).send({recipes})
    
}

exports.requestSingleRecipe = async (req,res,next) =>{

    const recipe = await fetchSingleRecipe(req.params)

    console.log(recipe)

    res.status(200).send({recipe})
}