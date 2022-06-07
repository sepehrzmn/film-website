import React from "react";

import { useGetPageMoviesQuery } from "@features/pages/pagesSlice";
import { useSearchParams } from "react-router-dom";

import Movie from "./Movie";
import { Link } from "react-router-dom";

const PageMovies = () => {
	const [params] = useSearchParams();
	const pageId = Number(params?.get("page") || 1);
	const {
		data: movies,
		isFetching,
		isError,
		isSuccess,
		error,
	} = useGetPageMoviesQuery(pageId);

	let content;
	if (isFetching) {
		content = (
			<section
				className="container  mx-auto flex flex-col items-center sm:grid sm:gap-x-4 sm:gap-y-4 sm:p-5 overflow-hidden"
				style={{
					gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
				}}
			>
				{Array(10)
					.fill("")
					.map((_, index) => (
						<Movie key={index + 1} />
					))}
			</section>
		);
	} else if (isSuccess) {
		const { metadata } = movies;
		const next = Number(metadata.current_page) + 1;
		const prevent = Number(metadata.current_page) - 1;
		content = (
			<>
				<section
					className="container mx-auto flex flex-col items-center sm:grid sm:gap-x-4 sm:gap-y-4 sm:p-5 overflow-hidden"
					style={{
						gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
					}}
				>
					{movies.ids.map((moviesId) => (
						<Link to={`/movie/${moviesId}`} key={moviesId}>
							<Movie key={moviesId} id={moviesId} pageId={pageId} />
						</Link>
					))}
				</section>
				<ul className="w-[max-content] mx-auto text-black flex my-4 gap-x-3 ">
					{prevent <= 0 ? (
						""
					) : (
						<li>
							<Link
								to={`/movies?page=${prevent}`}
								className="p-2 bg-forgottenPurple rounded-lg px-3 text-[12px] font-bold text-warmGray-50"
							>
								{prevent}
							</Link>
						</li>
					)}
					<li>
						<Link
							to={"/"}
							className="p-2 bg-powerPeony pointer-events-none rounded-lg px-3 text-[12px] font-bold text-warmGray-50 "
						>
							{metadata.current_page}
						</Link>
					</li>
					{next > metadata.page_count ? (
						""
					) : (
						<li>
							<Link
								to={`/movies?page=${next}`}
								className="p-2 bg-forgottenPurple rounded-lg px-3 text-[12px] font-bold text-warmGray-50"
							>
								{next}
							</Link>
						</li>
					)}
				</ul>
			</>
		);
	} else if (isError) {
		content = (
			<>
				<div className="mt-20">
					<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
						Danger
					</div>
					<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
						<p>{error}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<section className="mt-20">{content}</section>
		</>
	);
};

export default PageMovies;
