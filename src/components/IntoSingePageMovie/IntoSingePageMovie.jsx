import React from "react";
import PropTypes from "prop-types";

import { useGetSingleMovieQuery } from "@features/api/apiSlice";

import { Error } from "@components";
import Loading from "./Loading";

function IntoSingePageMovie({ movieId }) {
	const {
		data: movieInfo,
		isFetching,
		isError,
		isSuccess,
		error,
	} = useGetSingleMovieQuery(movieId);

	let content;

	if (isFetching) {
		content = <Loading />;
	} else if (isSuccess) {
		content = (
			<>
				<section className="relative flex justify-center items-center text-white sm:py-16 md:px-24">
					<div
						className="h-full blur-md w-full bg-no-repeat bg-cover absolute"
						style={{ backgroundImage: `url('${movieInfo.poster}')` }}
					/>
					<div className="absolute bg-gray-700 border-4 sm:border-[5px] md:border-8 border-dashed opacity-[0.4] h-full sm:h-[95%] container rounded-lg" />
					<section className="grid grid-cols-8 xl:grid-rows-4 z-10 container h-full sm:h-[95%] p-5 ">
						<section className="col-span-8 min-w-[300px] xl:col-span-2 xl:row-span-3 flex flex-col justify-center items-center xl:justify-start xl:items-start">
							<img
								src={movieInfo.poster}
								alt={movieInfo.title}
								className="xl:w-[80%] lg:w-[40%] rounded-md"
							/>
							<h2 className="text-center xl:w-[80%] text-xl mt-2">
								{movieInfo.title}
							</h2>
						</section>
						<section className="col-span-8 xl:col-span-5 mt-5 xl:row-span-3">
							<section className="flex gap-x-4 uppercase">
								{movieInfo.genres.map((genre) => (
									<div key={genre} className="bg-indigo-500 p-2 rounded-xl">
										{genre}
									</div>
								))}
							</section>
							<section className="mt-5 leading-9">
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Year
									</span>
									<span>{movieInfo.year}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Released
									</span>
									<span>{movieInfo.released}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Runtime
									</span>
									<span>{movieInfo.runtime}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Director
									</span>
									<span>{movieInfo.director}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Writer
									</span>
									<span>{movieInfo.writer}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Actors
									</span>
									<span>{movieInfo.actors}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Plot
									</span>
									<span>{movieInfo.plot}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Country
									</span>
									<span>{movieInfo.country}</span>
								</div>
								<div>
									<span className="after:content-['_:_'] text-violet-500 font-bold">
										Awards
									</span>
									<span>{movieInfo.awards}</span>
								</div>
							</section>
						</section>
						<section className="col-span-8 xl:col-span-2"></section>
						<section className="col-span-8 xl:row-span-1 flex justify-center items-center gap-2 flex-wrap mt-5  xl:mt-0">
							{movieInfo.images.map((image, index) => (
								<img
									key={index + 1}
									src={image}
									className="w-[300px]"
									alt={movieInfo.title}
								/>
							))}
						</section>
					</section>
				</section>
			</>
		);
	} else if (isError) {
		const text = error?.data?.message ?? error?.error;
		const status = error.status;

		content = (
			<div className="container mx-auto">
				<Error text={text} status={status} />
			</div>
		);
	}
	return <section className="select-none p-2 sm:p-0">{content}</section>;
}

IntoSingePageMovie.propTypes = {
	movieId: PropTypes.number.isRequired,
};

export default IntoSingePageMovie;
