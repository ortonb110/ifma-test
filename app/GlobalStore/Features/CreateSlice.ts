import { createSlice } from '@reduxjs/toolkit';

//This is the initial state of the AppContext State

export interface AppContextState {
  page: number;
  search: string;
  movieDataHome: any;
  details: any;
  movieData: any;
  tvPage: number;
  tvData: any;
  tvDetails: any;
  tvSearch: string;
  tvDataHome: any;
  moviesLoading: boolean;
  tvLoading: boolean;
  searchData: any;
  searchPageLoading: boolean;
}

const initialState: AppContextState = {
  page: 1,
  search: '',
  movieDataHome: [],
  movieData: [],
  details: {},
  tvPage: 1,
  tvData: [],
  tvDetails: {},
  tvSearch: '',
  tvDataHome: [],
  moviesLoading: false,
  tvLoading: false,
  searchData: [],
  searchPageLoading: false,
};

//This is the AppContext methods that will be used to update the state
const AppContext = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      } else {
        state.page = 1;
      }
    },
    incrementTV: (state) => {
      state.tvPage += 1;
    },
    decrementTV: (state) => {
      if (state.tvPage > 1) {
        state.tvPage -= 1;
      } else {
        state.tvPage = 1;
      }
    },
    getSearchText: (state, action) => {
      state.search = action.payload.trim();
    },
    resolveMovieData: (state, action) => {
      state.movieDataHome = action.payload;
    },
    resolveDetails: (state, action) => {
      state.details = action.payload;
    },
    resolveMovies: (state, action) => {
      state.movieData = action.payload;
    },
    getSearchTextTV: (state, action) => {
      state.tvSearch = action.payload.trim();
    },
    resolveMovieDataTV: (state, action) => {
      state.tvDataHome = action.payload;
    },
    resolveDetailsTV: (state, action) => {
      state.tvDetails = action.payload;
    },
    resolveMoviesTV: (state, action) => {
      state.tvData = action.payload;
    },
    setMoviesLoading: (state, action) => {
      state.moviesLoading = action.payload;
    },
    setTvLoading: (state, action) => {
      state.tvLoading = action.payload;
    },
    setSearchPageLoading: (state, action) => {
      state.searchPageLoading = action.payload;
    },
    resolveSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  getSearchText,
  resolveMovieData,
  resolveDetails,
  resolveMovies,
  incrementTV,
  decrementTV,
  getSearchTextTV,
  resolveMovieDataTV,
  resolveDetailsTV,
  resolveMoviesTV,
  setTvLoading,
  setMoviesLoading,
} = AppContext.actions;
export default AppContext.reducer;
