import { useDispatch, useSelector } from "react-redux";
import {
	addTodo,
	archiveTodo,
	deleteTodo,
	editTodo,
	setInputTaskValue,
} from "../features/TodoSlice";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./buttons/Button";
// import TaskItem from "./EditTodo";
import { useState } from "react";
const AddTask = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedLabel, setEditedLabel] = useState({ id: "", label: "" });

	const dispatch = useDispatch();
	const values = useSelector((state) => state.todo.inputTaskValue);
	const todos = useSelector((state) => state.todo.todos);
	const searchQuery = useSelector((state) => state.todo.searchQuery);
	// ! Edit Handler
	const handleBlur = () => {
		console.log('input blurred')
		handleSave();
	};
	const handleEdit = (todo) => {
		setEditedLabel({ id: todo.id, label: todo.label });
		setIsEditing(true);
	};
	const handleSave = () => {
		if (editedLabel.label.trim() !== "") {
			console.log("Saving edited task");
			dispatch(
				editTodo({
					id: editedLabel.id,
					updatedLabel: editedLabel.label,
				})
			);
			setIsEditing(false);
		} else {
			console.log("Edited label is empty");
		}
	};

	const handleInputChange = (e) => {
		setEditedLabel({ ...editedLabel, label: e.target.value });
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			e.stopPropagation();
			handleSave();
		}
	};
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
			toast.error("please enter a task");
		}
	};
	const handleChange = (e) => {
		const inputValue = e.target.value;
		dispatch(setInputTaskValue(inputValue));
	};

	const deleteHandler = (taskId) => {
		dispatch(deleteTodo(taskId));
		console.log("deleted");
		toast.success("Task deleted successfully");
	};
	const handleKeyEnter = (e) => {
		if (e.key === "Enter") {
			dispatch(addTodo());
			toast.success("Task entered successfully");
		}
	};
	// const handleEdit = (todo, newLabel) => {
	// 	dispatch(editTodo({ id: todo.id, updateLabel: newLabel }));
	// 	// dispatch(setInputTaskValue(newLabel));
	// 	console.log("clicked");
	// 	toast.warning("currently edit is disabled");
	// };
	const archiveHandler = (taskID) => {
		dispatch(archiveTodo(taskID));
		toast.success("task Archived Successfully");
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
					className=" hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 text-white p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
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
								{isEditing && todo.id === editedLabel.id ? (
									<>
										<input
											type="text"
											onBlur={handleBlur}
											value={editedLabel.label}
											onChange={handleInputChange}
											onKeyDown={handleKeyDown}
											autoFocus
										/>
										{/* <button onClick={handleEdit}>edit</button> */}
									</>
								) : (
									<li className="ml-2 w-96 px-5 py-2 select-all">
										{todo.label}
									</li>
								)}
								<Button
									onDelete={() => deleteHandler(todo.id)}
									onEdit={() => handleEdit(todo)}
									// todo={todo}
									onArchive={() => archiveHandler(todo.id)}
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
