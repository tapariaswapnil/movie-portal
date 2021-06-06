import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  authenticated: service(),

  beforeModel() {
    if (!this.authenticated.successful) {
      this.transitionTo('movies');
    }
  },

  model() {
    return {
      title: "",
      year: "",
      rated: "",
      released: "",
      runtime: "",
      genre: "",
      director: "",
      writer: "",
      actors: "",
      plot: "",
      language: "",
      country: "",
      awards: "",
      poster: "",
      metascore: "",
      imdbRating: "",
      imdbVotes: "",
      id: "",
      type: "",
      response: ""
    };
  }
});
