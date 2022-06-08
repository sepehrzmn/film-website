import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const pageGenreAdapter = createEntityAdapter();
const initialState = pageGenreAdapter.getInitialState({
	metadata: {},
});

export const fetchPageGenre = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPageGenre: builder.query({
			query: ({ genreId, pageId }) => ({
				url: `/genres/${genreId}/movies?page=${pageId}`,
			}),
			transformResponse: (result) => {
				initialState.metadata = result.metadata;
				return pageGenreAdapter.setAll(initialState, result.data);
			},
		}),
	}),
});

const resultPageGenre = (state, ids) => {
	return fetchPageGenre.endpoints.getPageGenre.select(ids, state);
};

const selectAllData = createSelector(
	[resultPageGenre, (state) => state, (state, infoPage) => infoPage],
	(result, state, infoPage) => {
		return result(state, infoPage)?.data;
	}
);

export const { selectAll: moviesGenre, selectById: movieGenre } =
	pageGenreAdapter.getSelectors((state, id, infoPage) => {
		return selectAllData(state, infoPage) ?? initialState;
	});
export const { useGetPageGenreQuery } = fetchPageGenre;
