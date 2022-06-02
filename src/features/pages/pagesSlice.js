import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const moviePagesAdapter = createEntityAdapter({});
const initialState = moviePagesAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPageMovies: builder.query({
			query: (page) => ({ url: `/movies?page=${page}`, method: "GET" }),
			transformResponse: (responseData) =>
				moviePagesAdapter.setAll(initialState, responseData.data),
		}),
	}),
});

export const selectResultMoviePages =
	extendedApiSlice.endpoints.getPageMovies.select();
const selectPostData = createSelector(
	[selectResultMoviePages],
	(moviesResult) => moviesResult?.data
);
export const { selectAll: moviesInPage, selectIds: idMoviesInPage } =
	moviePagesAdapter.getSelectors(
		(state) => selectPostData(state) ?? initialState
	);

export const { useGetPageMoviesQuery } = extendedApiSlice;
