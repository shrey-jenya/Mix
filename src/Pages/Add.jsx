import axios from "axios";
import {
	Button,
	Checkbox,
	FloatingLabel,
	Label,
	TextInput,
} from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";

function Add({ addUser }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const handleSubmit = async () => {
		try {
			const newUser = {
				name: name,
				email: email,
				username: username,
			};
			const res = await axios.post(
				`https://jsonplaceholder.typicode.com/users`,
				newUser
			);
			addUser(res.data);
			setEmail("");
			setName("");
			setUsername("");
			// toast.success('User added successfully')
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
					submit
				</Button>
			</div>
		</div>
	);
}
export default Add;
