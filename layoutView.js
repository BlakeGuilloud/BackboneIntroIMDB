var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var FormView = require('./formView');
var MoviesView = require('./collectionView');
var MovieCollection = require('./collection');
var HeaderView = require('./headerView');



module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var that = this;
    var formHTML = new FormView();
    var headerHTML = new HeaderView();
    var movieCollection = new MovieCollection();
    movieCollection.fetch().then(function(){
      var moviesView = new MoviesView({collection: movieCollection});
      that.$el.find('aside').html(formHTML.render().el);
      that.$el.find('header').html(headerHTML.render().el);
    });
  }
});
