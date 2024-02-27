	import React, { useState } from "react";
	import { useDispatch, useSelector } from "react-redux";
	import { addTodo, deleteTodo } from "../features/TodoSlice";
	import { Flip, ToastContainer, toast } from "react-toastify";
	import "react-toastify/dist/ReactToastify.css";
	const AddTask = () => {
		const [taskInput, setTaskInput] = useState("");
		const [tasks, setTasks] = useState([]);
		// const selector = useSelector((state) => {
		// 	state.task = state.task;
		// });
		const dispatch = useDispatch();
		const addHandler = () => {
			if (taskInput.trim() !== "") {
				const newTask = {
					id: Date.now(),
					text: taskInput,
				};
				dispatch(addTodo(newTask));
				setTasks([...tasks, newTask]);
				setTaskInput("");
				console.log(taskInput);
				toast.success("Task added successfully");
			} else {
				toast.error("please enter a task");
			}
		};
		const handleChange = (e) => {
			setTaskInput(e.target.value);
		};
		// ! Delete Task
		const deleteHandler = (id) => {
			dispatch(deleteTodo(id));
		};
		return (
			<div>
				<div className="mb-6 flex items-center gap-3 p-5">
					<input
						onChange={handleChange}
						autoFocus
						autoComplete="off"
						type="text"
						id="large-input"
						placeholder="Add Task..."
						className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
					<button
						onClick={addHandler}
						type="button"
						class="text-white p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
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
						{tasks.map((task, index) => (
							<div
								key={index}
								className="bg-gray-100 mb-5 p-2 rounded-lg flex justify-around item-center"
							>
								<li className="ml-2 w-20 px-5 py-2">{task.text}</li>

								<button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 " onClick={() => deleteHandler(task.id)}>
									Delete
								</button>
								<button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 " onClick={() => deleteHandler(task.id)}>
									Edit
								</button>
								<button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 " onClick={() => deleteHandler(task.id)}>
									Archive
								</button>
								<hr />
							</div>
						))}
					</ul>
				</div>
			</div>
		);
	};

	export default AddTask;
