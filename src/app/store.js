import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../features/TodoSlice";

const store = configureStore({
	reducer: {
		todo: TodoSlice,
	},
});
export default store;
