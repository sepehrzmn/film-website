import React from "react";
import PropTypes from "prop-types";

function Error({ text, status }) {
	return (
		<section className="mt-20 min-w-80 px-2">
			<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 w-[100%]">
				Danger ({status && status})
			</div>
			<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 w-[100%]">
				<p>{text}</p>
			</div>
		</section>
	);
}
Error.propTypes = {
	status: PropTypes.string,
	text: PropTypes.string.isRequired,
};
export default Error;
