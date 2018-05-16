import Controller from '@ember/controller';

export default Controller.extend({
    ingred: localStorage.getItem("myIngredients"),
});
