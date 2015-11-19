var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  model: null,
  tagName: 'article',
  template: _.template(tmpl.movie),
  events: {
    'click .delete': 'onDelete',
    'click .edit': 'onEdit',
    'click .submitEdit': 'onSubmitEdit',

  },
  
  onDelete: function(event){
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },
  onEdit: function(event){
    event.preventDefault();
    this.$('.editForm').toggleClass('hidden');
    //remove hidden
  },
  onSubmitEdit: function(event){
    event.preventDefault();
    this.$('.editForm').toggleClass('hidden');
    var editMovie = {
      title: this.$el.find('input[name="editTitle"]').val(),
      starring: this.$el.find('input[name="editStarring"]').val(),
      released: this.$el.find('input[name="editReleased"]').val(),
      cover: this.$el.find('input[name="editCover"]').val(),
      description: this.$el.find('textarea[name="editDescription"]').val()
    };
    var movieEdit = this.model;
    movieEdit.set(editMovie);
    //add hidden
    movieEdit.save();
    this.render();
  },
  initialize: function(){},
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
