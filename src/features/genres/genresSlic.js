import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const genresAdapter = createEntityAdapter();
const initialState = genresAdapter.getInitialState();

export const fetchGenres = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getGenres: builder.query({
			query: () => "/genres",
			transformResponse: (result) => genresAdapter.setAll(initialState, result),
		}),
	}),
});

const resultGenres = fetchGenres.endpoints.getGenres.select();

const selectAllGenres = createSelector(
	[resultGenres],
	(resultData) => resultData?.data
);

export const { useGetGenresQuery } = fetchGenres;
export const { selectAll: allGenres, selectById: selectGenre } =
	genresAdapter.getSelectors((state) => selectAllGenres(state) ?? initialState);
