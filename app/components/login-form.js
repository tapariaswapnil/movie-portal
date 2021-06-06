import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  authenticated: service(),

  actions: {
    validateLogin() {
      if (this.username === "admin" && this.password === "secret") {
        window.localStorage.setItem('loggedIn', true);
        this.toggleProperty('authenticated.refresh');
        this.logIn && this.logIn();
      }
    }
  }
});
