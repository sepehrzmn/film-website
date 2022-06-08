import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://moviesapi.ir/api/v1/" }),
	endpoints: (builder) => ({
		getSingleMovie: builder.query({
			query: (movieId) => ({ url: `movies/${movieId}`, method: "GET" }),
		}),
		addUser: builder.mutation({
			query: (user) => ({ url: "/register", method: "POST", body: user }),
		}),
	}),
});

export const { useGetSingleMovieQuery, useAddUserMutation } = apiSlice;
