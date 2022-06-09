import React, { useState } from "react";

import { InitialTransition } from "@components";
import { motion } from "framer-motion";
import { useAddUserMutation } from "../../features/api/apiSlice";

function Login() {
	const [singUp, setSingUp] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState({
		name: "",
		email: "",
		password: "",
		fetch: "",
	});
	const [addUser, { isLoading, data }] = useAddUserMutation();
	const animePage = {
		initial: {
			y: -100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.9,
				delay: 0.5,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};
	const check = singUp
		? [
				name,
				email,
				password,
				password,
				!error.password,
				!error.name,
				!error.email,
				!isLoading,
		  ].every(Boolean)
		: [name, password, !error.name, !error.password, !isLoading].every(Boolean);

	async function submitHandle(event) {
		event.preventDefault();
		if (check) {
			try {
				await addUser({ name, password, email }).unwrap();
				setName("");
				setEmail("");
				setPassword("");
				console.log(data);
			} catch (error) {
				console.log(error);
				setError((preventError) => ({
					...preventError,
					fetch: error?.message ?? error.error,
				}));
			}
		}
	}

	return (
		<motion.main
			className="flex justify-center items-center h-[100vh] select-none bg-indigo-400 "
			exit={{ opacity: 0 }}
		>
			<InitialTransition />
			<motion.div initial="initial" animate="animate" variants={animePage}>
				<section className="w-[370px] scale-90 sm:scale-[1] py-10 rounded shadow-md px-8 pt-6 mb-4 bg-white">
					<form className="w-full" onSubmit={submitHandle}>
						<div className="min-h-[100px]">
							<label
								htmlFor="Username"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Username
							</label>
							<input
								type="text"
								name="Username"
								id="Username"
								value={name}
								onChange={(event) => {
									const text = event.target.value.trim();
									const regExp = /[A-z]/g;
									const match = text.match(regExp);
									if (text.length >= 10) {
										setError((preventError) => ({
											...preventError,
											name: "Your name must be less than 10 characters long.",
										}));
									} else if (text.length < 4) {
										setError((preventError) => ({
											...preventError,
											name: "Your name should not be less than 4 characters.",
										}));
									} else if (!match) {
										setError((preventError) => ({
											...preventError,
											name: "Please use letters.",
										}));
									} else {
										setError((preventError) => ({
											...preventError,
											name: "",
										}));
									}
									setName(text);
								}}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Username"
							/>
							<p className="text-red-500 text-xs italic">
								{error.name && error.name}
							</p>
						</div>
						{singUp && (
							<div className="min-h-[100px]">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-bold mb-2"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									value={email}
									onChange={(event) => {
										const text = event.target.value.trim();
										const reqExp =
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
										const match = text.match(reqExp);
										if (!match) {
											setError((preventError) => ({
												...preventError,
												email: "Enter your Email Correctly.",
											}));
										} else {
											setError((preventError) => ({
												...preventError,
												email: "",
											}));
										}
										setEmail(text);
									}}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									placeholder="Email"
								/>
								<p className="text-red-500 text-xs italic">
									{error.email && error.email}
								</p>
							</div>
						)}
						<div className="min-h-[100px]">
							<label
								htmlFor="password"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								value={password}
								onChange={(event) => {
									const text = event.target.value.trim();
									if (text.length < 10) {
										setError((preventError) => ({
											...preventError,
											password:
												"Your password should not be less than 10 characters.",
										}));
									} else {
										setError((preventError) => ({
											...preventError,
											password: "",
										}));
									}
									setPassword(text);
								}}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="******************"
							/>
							<p className="text-red-500 text-xs italic">
								{error.password && error.password}
							</p>
						</div>
						<p className="text-red-500 text-xs italic">
							{error.fetch && error.fetch}
						</p>
						<div className="flex justify-between items-center py-4 mt-4">
							<button
								type="submit"
								disabled={!check}
								className="uppercase cursor-pointer bg-blue-400 p-2 shadow rounded-md text-sm text-white hover:shadow-inner disabled:bg-blue-100"
							>
								{singUp ? "sing up" : "sing in"}
							</button>
							<div
								className="cursor-pointer text-blue-500"
								onClick={() => setSingUp(!singUp)}
							>
								{singUp ? "sing in" : "sing up"}
							</div>
						</div>
					</form>
				</section>
			</motion.div>
		</motion.main>
	);
}

export default Login;
