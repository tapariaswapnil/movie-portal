import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  search: service(),

  editMovie: equal('action', 'edit'),

  buttonLabel: computed('editMovie', function() {
    return this.editMovie ? "Edit" : "Add";
  }),

  actions: {
    takeAction() {
      this.get('afterAction') && this.get('afterAction')(this.movie, this.search.model)
    }
  }
});