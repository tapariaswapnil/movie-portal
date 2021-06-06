import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    afterEdit() {
      this.transitionToRoute('movies');
    }
  }
});
