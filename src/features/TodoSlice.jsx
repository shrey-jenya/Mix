import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const ToDoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: [
			{
				id: v4(),
				label: "Music",
			},
			{
				id: v4(),
				label: "Animal-Movie",
			},
		],
		inputTaskValue: "",
		searchQuery: "",
	},
	reducers: {
		addTodo: (state) => {
			if (state.inputTaskValue.length) {
				const newTask = {
					id: v4(),
					label: state.inputTaskValue,
				};
				return {
					...state,
					todos: [...state.todos, newTask],
					inputTaskValue: "",
				};
			}
		},
		deleteTodo: (state, action) => {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		},
		updateTodo: (state, action) => {
			const { id, label } = action.payload;
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === id ? { ...todo, label } : todo
				),
			};
		},
		setInputTaskValue: (state, action) => {
			state.inputTaskValue = action.payload;
		},
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});
export const { addTodo, deleteTodo, updateTodo, setInputTaskValue, setSearchQuery } =
	ToDoSlice.actions;
export default ToDoSlice.reducer;
