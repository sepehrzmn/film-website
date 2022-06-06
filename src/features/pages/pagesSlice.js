import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const moviePagesAdapter = createEntityAdapter({});
export const initialState = moviePagesAdapter.getInitialState({
	metadata: {},
});
export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPageMovies: builder.query({
			query: (page) => ({ url: `/movies?page=${page}`, method: "GET" }),
			transformResponse: (responseData) => {
				initialState.metadata = responseData.metadata;
				return moviePagesAdapter.setAll(initialState, responseData.data);
			},
		}),
	}),
});

export const selectResultMoviePages = (state, pageId) => {
	return extendedApiSlice.endpoints.getPageMovies.select(pageId, state);
};

export const selectPostData = createSelector(
	[
		(state) => state,
		selectResultMoviePages,
		(state, id) => {
			return id;
		},
	],
	(state, moviesResult, id) => {
		console.log(id);
		const result = moviesResult(state, id);
		return result?.data;
	}
);
export const { selectById: movieInPage } = moviePagesAdapter.getSelectors(
	(state, id, pageId) => {
		return selectPostData(state, pageId) ?? initialState;
	}
);

export const { useGetPageMoviesQuery } = extendedApiSlice;
