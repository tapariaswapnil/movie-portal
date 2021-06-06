import Service from '@ember/service';
import  { computed } from '@ember/object';

export default Service.extend({
  searchQuery: '',
  selectedGenre: 'All',

  init() {
    this._super(...arguments);

    this.set('model', []);
  },

  genres: computed('model.[]', function() {
    let object = [];

    (this.model || []).forEach(({ genre }) => {
      let genres = genre.split(',');

      genres.forEach(genre => {
        genre = genre.trim();
      });

      object = [...object, ...genres];
    })
    return object.uniq();
  })
});
