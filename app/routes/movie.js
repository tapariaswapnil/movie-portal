import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  authenticated: service(),

  beforeModel() {
    if (!this.authenticated.successful) {
      this.transitionTo('movies');
    }
  }
});