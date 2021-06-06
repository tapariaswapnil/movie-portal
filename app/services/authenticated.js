import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  refresh: true,

  successful: computed('refresh', function() {
    return window.localStorage.getItem('loggedIn') === 'true';
  })
});