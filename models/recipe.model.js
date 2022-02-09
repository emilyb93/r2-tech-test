const fs = require('fs/promises')

exports.fetchRecipes = async (queryObj)=>{
    console.log(queryObj)

    let querysPresent = false

    

    
    
    const recipesStr = await fs.readFile('./data/data.json', 'utf8')
    let filteredRecipes
    

    const recipeArray = await JSON.parse(recipesStr)
    if(queryObj.exclude_ingredients){
        querysPresent = true

        
            const queries = queryObj.exclude_ingredients.split(',').map((ing)=>{
                
                if (ing.slice(-1) === 's'){
                    return ing.slice(0, -1)
                }
                return ing
            })
            console.log(queries)
        
             filteredRecipes =  recipeArray.filter( async (recipe)=>{

                let remove = false

                await queries.forEach((query) =>{
                     if (JSON.stringify(recipe.ingredients).includes(query)){
                        remove = true
                     }

                 } )
                 return !remove
            })
            console.log(recipeArray.length, filteredRecipes.length)

    }

    return  querysPresent ? await filteredRecipes : await recipeArray
}