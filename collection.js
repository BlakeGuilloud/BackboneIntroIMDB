var Backbone = require('backbone');
var MovieModel = require('./model');

module.exports = Backbone.Collection.extend ({
  url: 'http://tiny-tiny.herokuapp.com/collections/imdbremake1',
  model: MovieModel,
  initialize: function(){

  }
})
