const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);


describe('Lizzos juice bar', () => {
  describe('/api', () => {
    test('/api', async () => {
      const { body } = await request.get('/api').expect(200);
      expect(body.message).toBe('ok');
    });
    
  });

  describe('/api/recipes', () => {
    describe('#GET', () => {
      
      test('should return an array of all recipes if requeseted with no query term', async () => {
  
        const {body} = await request.get('/api/recipes').expect(200)
  
        body.recipes.forEach((recipe)=>{
  
          expect(recipe).toEqual(expect.objectContaining({ 
            "id": expect.any(String),
          "imageUrl": expect.any(String),
          "instructions": expect.any(String),
          "ingredients": expect.any(Object)
          }))
  
          recipe.ingredients.forEach((ingObj)=>{
            expect(ingObj).toEqual(expect.objectContaining({
              'name' : expect.any(String),
              'grams' : expect.any(Number)
            }))
          })
        })
      });
  
      test('should exclude any ingredients given with the query of ?exclude_ingredients=:ingredients', async() => {
  
        const {body} = await request.get('/api/recipes?exclude_ingredients=apples,kale').expect(200)
  
        expect(body).not.toBe(undefined)
        
        body.recipes.forEach((recipe)=>{
  
          expect(recipe).toEqual(expect.objectContaining({ 
            "id": expect.any(String),
          "imageUrl": expect.any(String),
          "instructions": expect.any(String),
          "ingredients": expect.any(Object)
          }))
  
  
          recipe.ingredients.forEach((ingObj)=>{
            expect(ingObj.name).not.toBe('apple')
            expect(ingObj.name).not.toBe('carrot')
  
  
          })
          
        })
  
        
      });
    });

    describe('#POST', () => {
      test('should add a new recipe to the data, return with 200 and the recipe with a newly added unique id', async () => {
        const newRecipe = {
        "imageUrl": "http://www.images.com/101",
        "instructions": "literally just put it in a blender",
        "ingredients": [
          { "name": "mango", "grams": 112 },
          { "name": "coconut", "grams": 167 },
          { "name": "banana", "grams": 72 }
        ]
      }
        
        const {body} = await request.post('/api/recipes/3').send(newRecipe).expect(200)

        expect(body.recipe).toEqual(expect.objectContaining({ 
          "id": expect.any(Number),
           ...newRecipe
        }))

      });
    });

    
  });

  describe('/api/recipes/:id', () => {
    

    describe('#GET', () => {
      test('should return the specific recipe based on the id given in the url', async () => {
        const {body} = await request.get('/api/recipes/3').expect(200)

        expect(body.recipe).toEqual(expect.objectContaining({ 
          "id": 'recipe-3',
        "imageUrl": expect.any(String),
        "instructions": expect.any(String),
        "ingredients": expect.any(Object)
        }))
      });
    });
  });

  


});

