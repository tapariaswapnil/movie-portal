import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  search: service(),

  model() {
    return this.search.model;
  }
});
