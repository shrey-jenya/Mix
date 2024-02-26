import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		deleteTodo: (state, action) => {
			return state.filter((todo, index) => index !== action.payload);
		},
	},
});
export const { addTodo, deleteTodo } = ToDoSlice.actions;
export default ToDoSlice.reducer;
