var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var MovieModel = require('./model');

module.exports = Backbone.View.extend({

  className: 'addMovie',

  events: {
    'submit form': 'onAddMovie'
  },
  initialize: function(){
      this.model = new MovieModel();

  },
  onAddMovie: function(event){
    event.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      starring: this.$el.find('input[name="starring"]').val(),
      released: this.$el.find('input[name="released"]').val(),
      cover: this.$el.find('input[name="cover"]').val(),
      description: this.$el.find('textarea[name="description"]').val()
    };
    this.model.set(newMovie);
    this.model.save();
    this.add();
    this.$el.find('input, textarea').val('');
  },
  template: _.template(tmpl.form),
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
