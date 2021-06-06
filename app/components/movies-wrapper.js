import Component from '@ember/component';
import { computed } from '@ember/object';
import { reads, equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  search: service(),
  searchQuery: reads('search.searchQuery'),

  allGenre: equal('search.selectedGenre', 'All'),

  lowerCaseSearchQuery: computed('searchQuery', function() {
    return this.searchQuery.toLowerCase();
  }),

  searchedMovies: computed('filteredMovies.@each.{title,director}', 'searchQuery', function() {
    let { lowerCaseSearchQuery } = this;

    let movies = this.filteredMovies || [];

    if (lowerCaseSearchQuery) {
      return movies.filter((movie) => {
        let { title, director } = movie;

        title = title.toLowerCase();
        director = director.toLowerCase();

        return title.includes(this.lowerCaseSearchQuery) || director.includes(lowerCaseSearchQuery);
      })
    }
    return movies;
  }),

  compactMovies: computed('search.model.[]', function() {
    return this.search.model.compact();
  }),

  filteredMovies: computed('allGenre', 'search.selectedGenres', 'compactMovies.@each.genre', function() {
    if (this.allGenre) return this.compactMovies;

    return this.compactMovies.filter(({ genre }) => {
      return genre.includes(this.search.selectedGenre);
    });
  }),

  actions: {
    deleteMovie(id) {
      let movie = this.search.model.find(movie => {
        return movie && movie.id === id;
      });

      this.search.model.removeObject(movie);
    }
  }
});
