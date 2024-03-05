import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav/Nav";
import Login from "./pages/Login";
import { AuthProvider } from "./hooks/useAuth";
import Secret from "./pages/Secret";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {

	return (
		<AuthProvider>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/secret"
					element={<ProtectedRoute> <Secret /> </ProtectedRoute>}
				/>

			</Routes>
		</AuthProvider>
	);
};

export default App;
