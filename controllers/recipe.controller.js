const {fetchRecipes, fetchSingleRecipe, postNewRecipe} = require('../models/recipe.model.js')


exports.requestRecipes = async (req,res)=>{
    const recipes =  await fetchRecipes(req.query)

    
    
    res.status(200).send({recipes})
    
}

exports.requestSingleRecipe = async (req,res) =>{

    const recipe = await fetchSingleRecipe(req.params)


    res.status(200).send({recipe})
}

exports.addRecipe = async (req, res) => {
    console.log('in controller')

    console.log(req.body, '<<<<<<<')

    const recipe = await postNewRecipe(req.body)

    res.status(201).send({recipe})

}