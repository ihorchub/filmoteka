import axios from 'axios';

export default class ApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.idMovie = null;
  }

  async fetchOnMovie() {
    try {
      let movie_id = this.idMovie;
      const searchParams = new URLSearchParams({
        api_key: '411d08d89a4569fb1b50aec07ee6fb72',
        language: 'en-US',
      });

      const request = `https://api.themoviedb.org/3/movie/${movie_id}/videos?${searchParams}`;

      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async fetchById() {
    try {
      let movie_id = this.idMovie;
      const searchParams = new URLSearchParams({
        api_key: '411d08d89a4569fb1b50aec07ee6fb72',
        language: 'en-US',
      });

      const request = `https://api.themoviedb.org/3/movie/${movie_id}?${searchParams}`;

      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async fetchDefault() {
    try {
      const searchParams = new URLSearchParams({
        api_key: '411d08d89a4569fb1b50aec07ee6fb72',
      });

      const request = `https://api.themoviedb.org/3/trending/all/week?${searchParams}`;

      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async fetch() {
    try {
      const searchParams = new URLSearchParams({
        api_key: '411d08d89a4569fb1b50aec07ee6fb72',
        language: 'en-US',
        query: this.searchQuery,
        page: this.page,
        include_adult: false,
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
      if (this.searchQuery) {
        const searchParams = new URLSearchParams({
          api_key: '411d08d89a4569fb1b50aec07ee6fb72',
          language: 'en-US',
          query: this.searchQuery,
          include_adult: false,
        });
        const request = `https://api.themoviedb.org/3/search/movie?${searchParams}&page=${page}`;
        const data = await axios.get(request);
        return data;
      } else {
        const searchParams = new URLSearchParams({
          api_key: '411d08d89a4569fb1b50aec07ee6fb72',
        });
        const request = `https://api.themoviedb.org/3/trending/all/week?${searchParams}&page=${page}`;
        const data = await axios.get(request);
        console.log(request);
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

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
