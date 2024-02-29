import React from "react";
import BannerCom from "./components/Banner";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";

const App = () => {
	return (
		<div>
			<BannerCom />
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/add" element={<Add/>}/>
			</Routes>
		</div>
	);
};

export default App;
