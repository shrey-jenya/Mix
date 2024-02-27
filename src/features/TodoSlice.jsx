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
				label: "Music-X",
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
		setInputTaskValue: (state, action) => {
			state.inputTaskValue = action.payload;
		},
		editTodo: (state, action) => {
			const { id, updateLabel } = action.payload;
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === id ? { ...todo, label: updateLabel } : todo
				),
			};
		},
		setSearchQuery:(state,action)=>{
			state.searchQuery=action.payload
		}
	},
});
export const { addTodo, deleteTodo, setInputTaskValue, editTodo,setSearchQuery } =
	ToDoSlice.actions;
export default ToDoSlice.reducer;
