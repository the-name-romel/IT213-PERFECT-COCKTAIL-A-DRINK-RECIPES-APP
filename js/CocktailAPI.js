const proxyURL = "https://romel-acopra.herokuapp.com/";

class CocktailAPI{
    // Get recipe by name
    async getDrinksByName(name){
        // Search by name
        const apiResponse = await fetch(`${proxyURL}https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        
        // Returns a json response
        const cocktails = await apiResponse.json();
        
        return {
            cocktails
        }
        
    }
    
    // Get recipes by ingredient
    async getDrinksByIngredient(ingredient){
        // Search by Ingredient
        const apiResponse = await fetch(`${proxyURL}https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Wait for response then return json
        const cocktails = await apiResponse.json();
        
        return {
            cocktails
        }
    }

    // get single recipe
    async getSingleRecipe(id){
        // Search by Ingredient
        const apiResponse = await fetch(`${proxyURL}https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        // Wait for response then return json
        const recipe = await apiResponse.json();
        
        return {
            recipe
        }
    }
}