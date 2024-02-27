import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Archived from "./Pages/Archived";

const App = () => {
	return (
		<div>
			<marquee  className='text-3xl text-teal-500 ' >	This site is currently under construction. The edit and archive features are not working</marquee>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/archived" element={<Archived />} />
			</Routes>
		</div>
	);
};

export default App;
