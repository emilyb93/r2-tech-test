const {fetchRecipes} = require('../models/recipe.model.js')


exports.requestRecipes = async (req,res,next)=>{
    const recipes =  await fetchRecipes(req.query)
    
    
    res.status(200).send({recipes})
    
}