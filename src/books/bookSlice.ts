import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app/store';

const initialState: BookState = {
  isLoading: false,
  allBooks: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState: { ...initialState },
  reducers: {
    setAllBooks: (state: BookState, action: PayloadAction<Book[]>) => {
      state.allBooks = action.payload;
    },
    setIsLoading: (state: BookState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAllBooks, setIsLoading } = bookSlice.actions;

export default bookSlice.reducer;

export const selectAllBooks = (state: RootState) => state.book.allBooks;
export const selectBookState = (state: RootState) => state.book;
