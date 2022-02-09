const {fetchRecipes} = require('../models/recipe.model.js')


exports.requestRecipes = async (req,res,next)=>{
    const recipes =  await fetchRecipes()
    console.log(Array.isArray(recipes))
    
    
    res.status(200).send({recipes})
    
}