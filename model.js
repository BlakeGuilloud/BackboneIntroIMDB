var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/imdbremake1',
  idAttribute: '_id',
  defaults: function() {
    return {
      title: 'Star Wars: Episode VII - The Force Awakens',
      starring: 'Harrison Ford, Mark Hamill, Carrie Fisher',
      released: 2015,
      description: 'A continuation of the saga created by George Lucas and set thirty years after Star Wars: Episode VI - Return of the Jedi (1983).',
      cover: 'http://ia.media-imdb.com/images/M/MV5BMTkwNzAwNDA4N15BMl5BanBnXkFtZTgwMTA2MDcwNzE@._V1_SX214_AL_.jpg'
    };
  },
  initialize: function(){

  }
});
