import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('add');
  this.route('movie', { path: '/:id' }, function() {
    this.route('edit');
  });
  this.route('movies', { path: '' });
});
