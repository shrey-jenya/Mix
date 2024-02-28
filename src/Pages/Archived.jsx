import React from "react";
import { useSelector } from "react-redux";

const Archived = () => {
	const archivedTodos = useSelector((state) => state.todo.archivedTodos);
	return (
		<>
			{/* <div className="mt-5 flex flex-row justify-center">
				<h1 className="font-sans text-center font-bold text-8xl animate-bounce ">
					Archived Task : 0
				</h1>
			</div> */}
			<div className="grid grid-cols-1 gap-4 p-4">
				<ul className="list-decimal list-outside">
					{archivedTodos && archivedTodos.length ? (
						archivedTodos.map((archivedTodo) => (
							<li className="ml-2 w-96 px-5 py-2 select-all">
								{archivedTodo.label}
							</li>
						))
					) : (
						<div className="mt-5 flex flex-row justify-center">
							<h1 className="font-sans text-center font-bold text-8xl animate-bounce ">
								Archived Task : 0
							</h1>
						</div>
					)}
				</ul>
			</div>
		</>
	);
};

export default Archived;
