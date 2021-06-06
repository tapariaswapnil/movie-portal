import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToMovies() {
      this.transitionToRoute('movies');
    }
  }
});
