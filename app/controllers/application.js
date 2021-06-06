import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { reads, alias } from '@ember/object/computed';

export default Controller.extend({
  authenticated: service(),
  search: service(),
  
  classNames: ['application'],

  init() {
    this._super(...arguments);

    fetch('/imdb.json').then(data => {
      return data.json();
    }).then(data => {
      this.search.model.pushObjects(data);
    })
  },

  searchQuery: alias('search.searchQuery'),

  loggedIn: reads('authenticated.successful'),

  showLogInButton: computed('currentRouteName', function() {
    return this.currentRouteName !== 'login';
  }),

  showAddMovieButton: computed('currentRouteName', function() {
    return this.currentRouteName !== 'add';
  }),

  showInputField: computed('currentRouteName', function() {
    return this.currentRouteName === 'movies';
  }),

  showMoviesButton: computed('currentRouteName', function() {
    return this.currentRouteName !== 'movies';
  }),

  actions: {
    logOut() {
      window.localStorage.setItem('loggedIn', false);
      this.toggleProperty('authenticated.refresh');
    }
  }
});