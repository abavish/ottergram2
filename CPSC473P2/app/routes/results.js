import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({

  /* Old API Model
    model() {
      return new Promise((resolve, reject) => {

        let backup = {
          "count": 30,
          "recipes": [{
              "publisher": "Closet Cooking",
              "f2f_url": "http://food2fork.com/view/35171",
              "title": "Buffalo Chicken Grilled Cheese Sandwich",
              "source_url": "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
              "recipe_id": "35171",
              "image_url": "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",
              "social_rank": 100,
              "publisher_url": "http://closetcooking.com"
            },
            {
              "publisher": "All Recipes",
              "f2f_url": "http://food2fork.com/view/29159",
              "title": "Slow Cooker Chicken Tortilla Soup",
              "source_url": "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
              "recipe_id": "29159",
              "image_url": "http://static.food2fork.com/19321150c4.jpg",
              "social_rank": 100,
              "publisher_url": "http://allrecipes.com"
            }, {
              "publisher": "My Baking Addiction",
              "f2f_url": "http://food2fork.com/view/e7fdb2",
              "title": "Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",
              "source_url": "http://www.mybakingaddiction.com/mac-and-cheese-roasted-chicken-and-goat-cheese/",
              "recipe_id": "e7fdb2",
              "image_url": "http://static.food2fork.com/MacandCheese1122b.jpg",
              "social_rank": 100,
              "publisher_url": "http://www.mybakingaddiction.com"
            },
            {
              "publisher": "The Pioneer Woman",
              "f2f_url": "http://food2fork.com/view/47187",
              "title": "White Chicken Enchiladas",
              "source_url": "http://thepioneerwoman.com/cooking/2009/11/white-chicken-enchiladas/",
              "recipe_id": "47187",
              "image_url": "http://static.food2fork.com/4060528829_67db52b435ebe3.jpg",
              "social_rank": 99.99999999999997,
              "publisher_url": "http://thepioneerwoman.com"
            }
          ]
        };

        let ingredient = localStorage.getItem("myIngredients");
        $.ajax({
          // url: 'https://jsonplaceholder.typicode.com/posts',
          url: 'http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=850bee0b4ba0e19db10886b1d1199a68&q=' + ingredient +'&format=json',
          method: 'GET',
          dataType: 'json',
          contentType: 'application/json',
          data: {
            format: 'json'
          },
          // beforeSend:  function(xhr) {
          //     xhr.setRequestHeader(headerName, headerValue);
          // },
          success: function(data) {
            console.log(JSON.stringify(data));
            resolve(data); //return usr;
          },
          error: function(data) {
            alert("Error with API");
            console.log(JSON.stringify(data));
            // reject(new Error('getJSON: `' + data + '` failed with status: [' + data.status + ']'));
            resolve(backup);
          },
          type: 'GET'
        });


      }) //end Promise
    }

  */

  model() {
    let example = {
      "q": "chicken",
      "from": 0,
      "to": 10,
      "params": {},
      "more": true,
      "count": 191058,
      "hits": [{
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7bf4a371c6884d809682a72808da7dc2",
            "label": "Teriyaki Chicken",
            "image": "https://www.edamam.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1.jpg",
            "source": "David Lebovitz",
            "url": "http://www.davidlebovitz.com/2012/12/chicken-teriyaki-recipe-japanese-farm-food/",
            "shareAs": "http://www.edamam.com/recipe/teriyaki-chicken-7bf4a371c6884d809682a72808da7dc2/chicken",
            "yield": 6,
            "dietLabels": [],
            "healthLabels": [],
            "cautions": [],
            "ingredientLines": [
              "1/2 cup (125ml) mirin",
              "1/2 cup (125ml) soy sauce",
              "One 2-inch (5cm) piece of fresh ginger, peeled and grated",
              "2-pounds (900g) boneless chicken thighs (4-8 thighs, depending on size)"
            ],
            "ingredients": [],
            "calories": 2253.101981306866,
            "totalWeight": 1179.9109942806097,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
            "label": "Chicken Vesuvio",
            "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
            "source": "Serious Eats",
            "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
            "shareAs": "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
            "yield": 4,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "1/2 cup olive oil",
              "5 cloves garlic, peeled",
              "2 large russet potatoes, peeled and cut into chunks",
              "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
              "3/4 cup white wine",
              "3/4 cup chicken stock",
              "3 tablespoons chopped parsley",
              "1 tablespoon dried oregano",
              "Salt and pepper",
              "1 cup frozen peas, thawed"
            ],
            "ingredients": [],
            "calories": 4181.274538701351,
            "totalWeight": 2913.153664598772,
            "totalTime": 60,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0a3f49a3da07cd8379d4e35f7a1a72fc",
            "label": "Chicken Teriyaki",
            "image": "https://www.edamam.com/web-img/827/8275cc33e9f0f4314617d5a356900aa7.jpg",
            "source": "No Recipes",
            "url": "http://norecipes.com/blog/2009/07/16/chicken-teriyaki-recipe/",
            "shareAs": "http://www.edamam.com/recipe/chicken-teriyaki-0a3f49a3da07cd8379d4e35f7a1a72fc/chicken",
            "yield": 8,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "1/2 cup water",
              "2 tablespoons Japanese soy sauce",
              "2 tablespoons dark brown sugar",
              "2 tablespoons mirin",
              "4-6 skin-on filleted (boneless) chicken thighs",
              "2 tablespoons mild flavored honey (or maltose)",
              "2 tablespoons dark soy sauce",
              "2 tablespoons sake"
            ],
            "ingredients": [],
            "calories": 1955.851,
            "totalWeight": 1046.5249999999999,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_888e9fc4a808e9e4ccdb2ac24a6a2f46",
            "label": "Chicken Teriyaki",
            "image": "https://www.edamam.com/web-img/551/551b906bafd4c45d50033742eaf00c02.jpg",
            "source": "Saveur",
            "url": "http://www.saveur.com/article/Recipes/Chicken-Teriyaki",
            "shareAs": "http://www.edamam.com/recipe/chicken-teriyaki-888e9fc4a808e9e4ccdb2ac24a6a2f46/chicken",
            "yield": 2,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "1 tbsp. vegetable oil",
              "4 pieces chicken, trimmed, skin pierced with a fork",
              "½ cup Teriyaki Sauce"
            ],
            "ingredients": [],
            "calories": 1020.76,
            "totalWeight": 515.6,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_14ebd7d6d65f761843dba35202de4b37",
            "label": "Chicken Satay",
            "image": "https://www.edamam.com/web-img/ba6/ba6f66d885e4d62a98055b088a5a85a3.jpg",
            "source": "BBC Good Food",
            "url": "http://www.bbcgoodfood.com/recipes/3645/",
            "shareAs": "http://www.edamam.com/recipe/chicken-satay-14ebd7d6d65f761843dba35202de4b37/chicken",
            "yield": 4,
            "dietLabels": [
              "High-Protein",
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "100.0ml soy sauce (Kikkoman is good)",
              "4.0 tbsp smooth peanut butter",
              "4 skinless chicken breasts fillets"
            ],
            "ingredients": [{
                "text": "100.0ml soy sauce (Kikkoman is good)",
                "weight": 107.78219736212455
              },
              {
                "text": "4.0 tbsp smooth peanut butter",
                "weight": 64
              },
              {
                "text": "4 skinless chicken breasts fillets",
                "weight": 1088
              }
            ],
            "calories": 1745.4445646019262,
            "totalWeight": 1259.7821973621246,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e29feeb250c3cc0f6eb487b7cae5d8b1",
            "label": "Chicken Piccata",
            "image": "https://www.edamam.com/web-img/93e/93e5e22c8792bfbc9fa3654207347c9c.jpg",
            "source": "Leite's Culinaria",
            "url": "http://leitesculinaria.com/5354/recipes-chicken-piccata.html",
            "shareAs": "http://www.edamam.com/recipe/chicken-piccata-e29feeb250c3cc0f6eb487b7cae5d8b1/chicken",
            "yield": 4,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "4 boneless, skinless chicken breast halves, patted dry (2 1/2 to 3 pounds total)",
              "Kosher salt and freshly ground black pepper",
              "1/2 cup all-purpose flour",
              "2 tablespoons olive oil",
              "4 tablespoons unsalted butter",
              "2 tablespoons fresh lemon juice",
              "1 tablespoon capers, drained",
              "2 tablespoons chopped fresh flat-leaf parsley"
            ],
            "ingredients": [],
            "calories": 1305.9649050000003,
            "totalWeight": 542.3978744593117,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_be3ba087e212f13672b553ecfa876333",
            "label": "Baked Chicken",
            "image": "https://www.edamam.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg",
            "source": "Martha Stewart",
            "url": "http://www.marthastewart.com/318981/baked-chicken",
            "shareAs": "http://www.edamam.com/recipe/baked-chicken-be3ba087e212f13672b553ecfa876333/chicken",
            "yield": 4,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
              "1/2 teaspoon coarse salt",
              "1/2 teaspoon Mrs. Dash seasoning",
              "1/4 teaspoon freshly ground black pepper"
            ],
            "ingredients": [],
            "calories": 901.58575,
            "totalWeight": 525.6156350198669,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2463f2482609d7a471dbbf3b268bd956",
            "label": "Catalan Chicken",
            "image": "https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg",
            "source": "Bon Appetit",
            "url": "http://www.bonappetit.com/columns/breadwinner/article/how-to-get-your-kids-to-eat-sauce-let-them-cook-it-themselves",
            "shareAs": "http://www.edamam.com/recipe/catalan-chicken-2463f2482609d7a471dbbf3b268bd956/chicken",
            "yield": 12,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "1 whole 4-pound chicken, quartered",
              "8 slices bacon",
              "30 cloves garlic",
              "3 lemons, peeled, rinds thinly sliced and reserved",
              "½ cup Banyuls or another fortified dessert wine",
              "1 cup veal or chicken stock"
            ],
            "ingredients": [],
            "calories": 3265.44,
            "totalWeight": 1699.5,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6b71506eaed4102c0b97dce1eaddd9a6",
            "label": "Roast Chicken",
            "image": "https://www.edamam.com/web-img/52c/52cdd87b67b161cce8e8a3f15237368f.jpg",
            "source": "Pioneer Woman",
            "url": "http://thepioneerwoman.com/cooking/2012/08/roast-chicken/",
            "shareAs": "http://www.edamam.com/recipe/roast-chicken-6b71506eaed4102c0b97dce1eaddd9a6/chicken",
            "yield": 4,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "1 whole Chicken, Rinsed And Patted Dry",
              "3/4 cups Butter, Softened",
              "3 whole Lemons",
              "4 sprigs Rosemary",
              "Salt And Pepper, to taste"
            ],
            "ingredients": [],
            "calories": 3285.0229024999994,
            "totalWeight": 1294.0970715157387,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        },
        {
          "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_44d56ce15bf57f82e886a54c45539033",
            "label": "Roast Chicken",
            "image": "https://www.edamam.com/web-img/0f1/0f1cb835e1967f2d9816657a5bb388a8.jpg",
            "source": "Fine Cooking",
            "url": "http://www.finecooking.com/recipes/roast-chicken.aspx",
            "shareAs": "http://www.edamam.com/recipe/roast-chicken-44d56ce15bf57f82e886a54c45539033/chicken",
            "yield": 4,
            "dietLabels": [
              "Low-Carb"
            ],
            "healthLabels": [
              "Sugar-Conscious",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Alcohol-Free"
            ],
            "cautions": [

            ],
            "ingredientLines": [
              "1-1/2 Tbs. olive oil",
              "2 tsp. granulated sugar",
              "3-1/2 to 4-lb. whole chicken",
              "Freshly ground black pepper",
              "2 Tbs. kosher salt"
            ],
            "ingredients": [],
            "calories": 3881.849843422875,
            "totalWeight": 1742.2309398204768,
            "totalTime": 0,
            "totalNutrients": {},
            "totalDaily": {},
            "digest": []
          },
          "bookmarked": false,
          "bought": false
        }
      ]
    };

    let ingredients = localStorage.getItem("myIngredients");
    console.log(ingredients);
    if(ingredients != null) {

        return new Promise((resolve, reject) => {
          $.ajax({
            url: 'https://api.edamam.com/search?q='+ ingredients +'&app_id=eca07f54&app_key=8edb19e3b69b1aecf7ef86a881bc6e7b&from=0&to=10',
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
              // console.log(JSON.stringify(data));
              resolve(data);  //return data
            },
            error: function(data) {
              // console.log(JSON.stringify(data));
              reject(new Error('getJSON: `' + data + '` failed with status: [' + data.status + ']'));
            },
            type: 'GET'
          });


        }) //end Promise
    }//end if
    else {
        alert('Ingredients NULL. Showing example.');
        return example;
    }
  }
});
