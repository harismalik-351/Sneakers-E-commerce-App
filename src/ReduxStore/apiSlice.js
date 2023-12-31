import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:4000/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery({baseUrl}),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: id => `products/${id}`,
    }),
  }),
});

export const {useGetProductQuery, useGetProductsQuery} = apiSlice;
