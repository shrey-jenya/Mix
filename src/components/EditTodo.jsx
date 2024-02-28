import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/TodoSlice";

const TaskItem = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedLabel, setEditedLabel] = useState(todo.label);
	const dispatch = useDispatch();

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		dispatch(editTodo({ id: todo.id, updateLabel: editedLabel }));
		setIsEditing(false);
	};

	const handleInputChange = (e) => {
		setEditedLabel(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSave();
		}
	};

	return (
		<div>
			{isEditing ? (
				<input
					type="text"
					value={editedLabel}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					autoFocus
				/>
			) : (
				<div>
					<span>{todo.label}</span>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
		</div>
	);
};

export default TaskItem;
