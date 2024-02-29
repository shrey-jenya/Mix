import { FloatingLabel, Modal } from "flowbite-react";
import React, { useState } from "react";

const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const handleAddUser = () => {
		onAddUser({ name, email, username });
		setName("");
		setEmail("");
		setUsername("");
		onClose();
        console.log('scsccscs')
	};
	return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<div>
					<FloatingLabel
						onChange={(e) => setName(e.target.value)}
						value={name}
						variant="standard"
						label="Name"
					/>
					<FloatingLabel
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						variant="standard"
						label="Username"
					/>
					<FloatingLabel
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						variant="standard"
						label="Email"
					/>
                    <button onClick={handleAddUser}>Add User</button>
				</div>
			</Modal>
		</div>
	);
};

export default AddUserModal;
