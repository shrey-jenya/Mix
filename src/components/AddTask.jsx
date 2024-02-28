import { useDispatch, useSelector } from "react-redux";
import {
	addTodo,
	deleteTodo,
	setInputTaskValue,
	updateTodo,
} from "../features/TodoSlice";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./buttons/Button";
import { useState } from "react";

const AddTask = () => {
	const dispatch = useDispatch();
	const values = useSelector((state) => state.todo.inputTaskValue);
	const todos = useSelector((state) => state.todo.todos);
	const searchQuery = useSelector((state) => state.todo.searchQuery);
	const [updateId, setUpdateId] = useState(null);

	const filteredTodos = todos.filter(
		(todo) =>
			todo &&
			todo.label &&
			todo.label.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const addHandler = () => {
		if (values.trim() !== "") {
			dispatch(addTodo());
			toast.success("Task added successfully");
		} else {
			toast.error("Please enter a task");
		}
	};

	const handleChange = (e) => {
		const inputValue = e.target.value;
		dispatch(setInputTaskValue(inputValue));
	};

	const deleteHandler = (taskId) => {
		dispatch(deleteTodo(taskId));
		toast.success("Task deleted successfully");
	};

	const handleKeyEnter = (e) => {
		if (e.key === "Enter") {
			dispatch(addTodo());
			toast.success("Task entered successfully");
		}
	};

	const updateHandler = (taskId) => {
		setUpdateId(taskId); // Set the ID of the todo being edited
		toast.success('Task updated successfully');
	};

	return (
		<div>
			<div className="mb-6 flex items-center gap-3 p-5">
				<input
					onChange={handleChange}
					onKeyDown={handleKeyEnter}
					value={values}
					autoFocus
					autoComplete="off"
					type="text"
					id="large-input"
					placeholder="Add Task..."
					className="block caret-pink-500 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
				<button
					onClick={addHandler}
					type="button"
					className="hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 text-white p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					Add
				</button>
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Flip}
				/>
			</div>
			<div className="grid grid-cols-1 gap-4 p-4">
				<ul className="list-decimal list-outside">
					{filteredTodos.length ? (
						filteredTodos.map((todo) => (
							<div
								key={todo.id}
								className="shadow-2xl bg-gray-100 bg-gradient-to-br from-gray-50 via-gray-200 to-gray-300 mb-1 p-2 rounded-lg flex justify-around item-center"
							>
								<li className="ml-2 w-96 px-5 py-2 select-all">
									{todo.id === updateId ? (
										<input
											type="text"
											value={todo.label}
											onChange={(e) =>
												dispatch(
													updateTodo({
														id: todo.id,
														label: e.target.value,
													})
												)
											}
										/>
									) : (
										todo.label
									)}
								</li>
								<Button
									onDelete={() => deleteHandler(todo.id)}
									onUpdate={() => updateHandler(todo.id)}
								/>
							</div>
						))
					) : (
						<h1 className="text-center text-8xl mb-10 animate-bounce">
							No todos...
						</h1>
					)}
				</ul>
			</div>
		</div>
	);
};

export default AddTask;
