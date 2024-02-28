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
		archiveTodos: [],
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
		archiveTodo: (state, action) => {
			const { todos, archiveTodos } = state;
			const todoToArchive = todos.find(
				(todo) => todo.id === action.payload
			);

			console.log(todoToArchive)
			if (todoToArchive ) {
				const updatedTodos = todos.filter(
					(todo) => todo.id !== action.payload
				);

				const updatedArchiveTodos = [...archiveTodos, todoToArchive];

				return {
					...state,
					todos: updatedTodos,
					archiveTodos: updatedArchiveTodos,
				};
			}else{
				console.log('not archived')
			}
			return state;
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
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});
export const {
	addTodo,
	deleteTodo,
	archiveTodo,
	setInputTaskValue,
	editTodo,
	setSearchQuery,
} = ToDoSlice.actions;
export default ToDoSlice.reducer;
