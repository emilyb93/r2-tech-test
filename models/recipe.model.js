const fs = require('fs/promises')

exports.fetchRecipes = async ()=>{
    
    const recipesStr = await fs.readFile('./data/data.json', 'utf8')
    

    const recipeArray = await JSON.parse(recipesStr)
    return await recipeArray
}