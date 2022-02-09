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

    test('should return an array of all recipes if requeseted with no query term', async () => {

      const {body} = await request.get('/api/recipes').expect(200)

      body.recipes.forEach((recipe)=>{

        expect(recipe).toEqual(expect.objectContaining({ 
          "id": expect.any(String),
        "imageUrl": expect.any(String),
        "instructions": expect.any(String),
        "ingredients": expect.any(Object)
        }))

        expect(recipe.ingredients).toEqual(expect.arrayContaining([expect.objectContaining({
          'name' : expect.any(String),
          'grams' : expect.any(Number)
        })]))
      })
    });
    
  });
});

