var Backbone = require('backbone');
var MovieModel = require('./model');

module.exports = Backbone.Collection.extend ({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/imdbremake',
  model: MovieModel,
  initialize: function(){

  }
})
