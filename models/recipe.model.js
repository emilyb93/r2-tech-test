const fs = require('fs/promises')



exports.fetchRecipes = async (queryObj)=>{
    console.log(queryObj)

    let querysPresent = false
    
    const recipesStr = await fs.readFile('./data/data.json', 'utf8')
    
    
    const allRecipes = JSON.parse(recipesStr)
    let filteredRecipes


    if(queryObj.exclude_ingredients){
        querysPresent = true

        
            const queries = queryObj.exclude_ingredients.split(',').map((ing)=>{
                
                if (ing.slice(-1) === 's'){
                    return ing.slice(0, -1)
                }
                return ing
            })

        
             filteredRecipes =  allRecipes.filter((recipe)=>{

                let remove = false

                 queries.forEach((query) =>{
                     if (JSON.stringify(recipe.ingredients).includes(query)){
                        remove = true
                     }

                 } )
                 return !remove
            })

    }

    return  querysPresent ? await filteredRecipes : await allRecipes
}

exports.fetchSingleRecipe = async ({id}) =>{
    const recipesStr = await fs.readFile('./data/data.json', 'utf8')
    const allRecipes = JSON.parse(recipesStr)

    const singleRecipe =  allRecipes.filter((recipe)=>{

        return recipe.id === `recipe-${id}`
    })
    return singleRecipe[0]


          

}

exports.postNewRecipe = async (body) => {
    console.log(body)
}