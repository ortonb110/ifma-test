import { createSlice } from '@reduxjs/toolkit';

//This is the initial state of the AppContext State

export interface AppContextState {
  page: number;
  search: string;
  movieDataHome: any;
  details: any;
  movieData: any;
}

const initialState: AppContextState = {
  page: 1,
  search: '',
  movieDataHome: [],
  movieData: [],
  details: {},
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
  },
});

export const {
  increment,
  decrement,
  getSearchText,
  resolveMovieData,
  resolveDetails,
  resolveMovies,
} = AppContext.actions;
export default AppContext.reducer;
