import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  search: service(),

  model() {
    let { id } = this.paramsFor('movie');

    return fetch('/imdb.json').then(data => {
      return data.json();
    }).then(data => {
      return data.findBy('id', id);
    })
  }
});