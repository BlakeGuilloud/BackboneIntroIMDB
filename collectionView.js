var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieView = require('./modelView');

module.exports = Backbone.View.extend({
  el: '.content',
  addOne: function(movieModel){
    var movieView = new MovieView({model: movieModel});
    this.$el.append(movieView.render().el);
  },
  addAll: function(){
    _.each(this.collection.models, this.addOne, this);
  },
  initialize: function(){
    this.addAll();
  },
});
