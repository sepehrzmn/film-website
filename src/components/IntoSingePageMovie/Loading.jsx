import React from "react";

function Loading() {
	return (
		<section className="relative animate-pulse bg-slate-50  flex justify-center items-center sm:py-16 md:px-24">
			<section className="grid grid-cols-8 xl:grid-rows-4 z-10 container h-full sm:h-[95%] p-10 bg-slate-100 ">
				<section className="col-span-8 min-w-[200px] h-96 xl:col-span-2 xl:row-span-3 flex flex-col justify-center items-center xl:justify-start xl:items-start">
					<div className="w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[90%] h-[100%] bg-slate-200 rounded-md" />
					<div className="w-[70%] sm:w-[50%]  lg:w-[40%] bg-slate-200 h-[20px] rounded-md mt-2" />
				</section>
				<section className="col-span-8 xl:col-span-5 mt-5 xl:row-span-3">
					<section className="w-28 h-10 bg-slate-300 rounded-xl"></section>
					<section className="mt-5">
						{Array(9)
							.fill("")
							.map((_, index) => (
								<div
									key={index + 1}
									className="bg-slate-200 w-48 h-4 rounded-md mt-5"
								/>
							))}
					</section>
				</section>
				<section className="col-span-8 xl:col-span-2"></section>
				<section className="col-span-8 xl:row-span-1 flex justify-center items-center gap-2 flex-wrap mt-5  xl:mt-0">
					{Array(3)
						.fill("")
						.map((_, index) => (
							<div
								key={index + 1}
								className="bg-slate-200 w-56 h-40 rounded-md mt-5"
							/>
						))}
				</section>
				<section className="col-span-8 xl:row-span-1 flex justify-center items-center mt-8">
					<div />
				</section>
			</section>
		</section>
	);
}

export default Loading;
