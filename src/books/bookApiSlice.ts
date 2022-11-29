import { apiSlice } from '../app/apiSlice';

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/books',
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApiSlice;
