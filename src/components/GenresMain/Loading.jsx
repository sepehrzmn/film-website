import React from "react";

function Loading() {
	return (
		<div className="animate-pulse col-span-2 rounded-md flex justify-center items-center min-h-[140px] text-white shadow-md odd:bg-slate-200 even:bg-slate-100">
			<div className="bg-slate-300 h-4 w-[80%] rounded-lg" />
		</div>
	);
}

export default Loading;
