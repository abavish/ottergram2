(function(window) {
  "use strict";
  //code goes here
  var App = window.App || {};
  function DataStore() {
    //console.log('running the DataStore function');
    this.data = {};
  }

  //method to add an order
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };

  //method to retrieve a specific order
  DataStore.prototype.get = function(key){
    return this.data[key];
  };

  //method to retrieve all orders
  DataStore.prototype.getAll = function() {
    return this.data;
  };

  //method to delete a specific order
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };


  App.DataStore = DataStore;
  window.App = App;
})(window);
