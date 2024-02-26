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
                id:Date.now(),
                text:taskInput
            }
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
							className="bg-gray-100 mb-5 p-4 rounded-lg "
						>
							<li className="ml-2">{task.text}</li>

							<button onClick={()=>deleteHandler(task.id)}>Delete</button>
							<hr />
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AddTask;
