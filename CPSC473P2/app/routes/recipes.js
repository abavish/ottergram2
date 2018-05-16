import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      meats: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Meat';
      }))
      .then(order => order.sortBy('ingredient')),

      fruit: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Fruit';
      }))
      .then(order => order.sortBy('ingredient')),

      grain: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Grain';
      }))
      .then(order => order.sortBy('ingredient')),

      veggies: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Vegetables';
      }))
      .then(order => order.sortBy('ingredient')),

      dairy: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Dairy';
      }))
      .then(order => order.sortBy('ingredient')),
    });
  }
});
