import axios from 'axios';
export default class ApiServise {
  constructor() {
    this.key= '411d08d89a4569fb1b50aec07ee6fb72',
    this.searchQuery = '';
    this.page = 1;
    this.idMovie = null;
  }
  async fetchOnMovie() {
    try {
      const request = `https://api.themoviedb.org/3/movie/${this.idMovie}/videos?api_key=${this.key}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchById() {
    try {
      const request = `https://api.themoviedb.org/3/movie/${this.idMovie}?api_key=${this.key}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchDefault() {
    try {
      const request = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.key}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetch() {
    try {
      const searchParams = new URLSearchParams({
        api_key: this.key,
        query: this.searchQuery,
      });
      const request = `https://api.themoviedb.org/3/search/movie?${searchParams}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchPagination(page) {
    try {
      if (this.searchQuery !== '') {
        const searchParams = new URLSearchParams({
          api_key: this.key,
          query: this.searchQuery,
        });
        const request = `https://api.themoviedb.org/3/search/movie?${searchParams}&page=${page}`;
        const data = await axios.get(request);
        return data;
      } else {
        const request = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.key}&page=${page}`;
        const data = await axios.get(request);
        return data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get movieId() {
    return this.idMovie;
  }
  set movieId(movieId) {
    this.idMovie = movieId;
  }
  resetPage() {
    this.page = 1;
  }
};