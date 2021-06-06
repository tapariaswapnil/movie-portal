import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  authenticated: service(),
  loggedIn: reads('authenticated.successful'),

  classNames: ['movie-card'],

  yearString: computed('movie.year', function() {
    let year = this.get('movie.year');

    if (year) {
      let [start, end] = year.split('-');

      if (end === '') {
        return `${start} - Present`;
      } else if (end) {
        return `${start} - ${end}`;
      } else {
        return year;
      }
    }
    return '-'
  }),

  bgClass: computed('movie.type', function() {
    if (this.get('movie.type') === 'movie') {
      return 'bg-blue';
    }
    return 'bg-red'
  }),

  actions: {
    delete() {
      get(this, 'deleteMovie') && get(this, 'deleteMovie')(this.movie.id);
    }
  }
});
