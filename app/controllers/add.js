import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    afterAdd(movie, movieArray) {
      set(movie, 'id', `${Math.ceil(Math.random() * 10000)}`)
      movieArray.pushObject(movie);
      this.transitionToRoute('movies');
    }
  }
});
