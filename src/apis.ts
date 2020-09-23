import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '6138e98e75551765a95f00b36d9ed87a',
    language: 'en-US',
  },
});

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id: number) => api.get(`movie/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  }),
  search: (term: string) => api.get('search/movie', {
    params: {
      query: encodeURIComponent(term),
    },
  }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id:number) => api.get(`tv/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  }),
  search: (term: string) => api.get('search/tv', {
    params: {
      query: encodeURIComponent(term),
    },
  }),
};

export const testApi = {
  getPosts: () => axios.get('https://jsonplaceholder.typicode.com/posts'),
};

export default api;
