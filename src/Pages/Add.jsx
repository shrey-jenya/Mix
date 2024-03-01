import axios from "axios";
import {
	Button,
	Checkbox,
	FloatingLabel,
	Label,
	TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Add({ addUser, updatedUser, user }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
			setUsername(user.username);
		}
	}, [user]);
	const handleSubmit = async () => {
		try {
			const userData = { name, email, username };
			if (user) {
				await axios.put(
					`https://jsonplaceholder.typicode.com/users/${user.id}`,
					userData
				);
				updatedUser({ ...user, ...userData });
				toast.success("User updated successfully");
			} else {
				const res = await axios.post(
					"https://jsonplaceholder.typicode.com/users",
					userData
				);
				addUser(res.data);
				toast.success("User added successfully");
			}
			setName("");
			setEmail("");
			setUsername("");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="p-5 mt-2  ">
			<FloatingLabel
				onChange={(e) => setName(e.target.value)}
				value={name}
				variant="standard"
				label="name"
			/>
			<FloatingLabel
				onChange={(e) => setUsername(e.target.value)}
				value={username}
				variant="standard"
				label="username"
			/>
			<FloatingLabel
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				variant="standard"
				label="email"
			/>
			<div className="flex justify-center">
				<Button onClick={handleSubmit} pill color="blue">
					{user ? "Update" : "Submit"}
				</Button>
			</div>
		</div>
	);
}
export default Add;
