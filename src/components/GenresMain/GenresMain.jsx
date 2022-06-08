import React from "react";

import { useGetGenresQuery } from "@features/genres/genresSlic";

import { Error } from "@components";
import Genre from "./Genre";
import Loading from "./Loading";

function GenresMain() {
	const {
		data: genres,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetGenresQuery();
	let content;

	if (isLoading) {
		content = Array(21)
			.fill("")
			.map((_, index) => <Loading key={index + 1} />);
	} else if (isSuccess) {
		content = genres.ids.map((genreId) => (
			<Genre key={genreId} genreId={genreId} />
		));
	} else if (isError) {
		const text = error?.data?.message || error.error;
		const status = error.status;

		content = <Error status={status} text={text} />;
	}

	return (
		<section className="bg-[#e9e3f8] py-4">
			<section className="px-4 grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-10 container grid-flow-row gap-1 mx-auto mt-10">
				{content}
			</section>
		</section>
	);
}

export default GenresMain;
