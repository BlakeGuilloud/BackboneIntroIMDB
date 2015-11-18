var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  events: {
    'click .delete': 'onDelete'
  },
  onDelete: function(){
    this.model.destroy();
    this.remove();
  },
  model: null,
  tagName: 'article',
  template: _.template(tmpl.movie),
  initialize: function(){},
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
