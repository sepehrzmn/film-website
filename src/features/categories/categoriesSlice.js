import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const categoriesAdapter = createEntityAdapter();
const initialState = categoriesAdapter.getInitialState({});

export const fetchCategories = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => ({ url: "/genres", method: "GET" }),
			transformResponse: (resultData) => {
				return categoriesAdapter.setAll(initialState, resultData);
			},
		}),
	}),
});

export const resultAllCategories =
	fetchCategories.endpoints.getCategories.select();
const AllCategoryData = createSelector([resultAllCategories], (categories) => {
	return categories?.data;
});

export const { selectAll: AllCategories, selectById: Category } =
	categoriesAdapter.getSelectors(
		(state) => AllCategoryData(state) ?? initialState
	);

export const { useGetCategoriesQuery } = fetchCategories;
