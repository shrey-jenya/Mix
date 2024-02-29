import React, { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import axios from "axios";
import { FaSort } from "react-icons/fa";
import Add from "./Add";
import {v4 as uuidv4 } from 'uuid'
import { ToastContainer } from "react-toastify";
const Home = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sortFiled, setSortField] = useState(null);
	const [sortOrder, setSortOrder] = useState(null);
	const [showAddForm, setShowAddForm] = useState(false);
	const userData = async () => {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users`
			);
			setUsers(response.data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching user data:", error);
			setLoading(false);
		}
	};

	useEffect(() => {
		userData();
	}, []);
	// ! toggle form
	const toggleAddForm = () => {
		setShowAddForm(!showAddForm);
	};
	// ! sort handler
	const sortHandler = (field) => {
		const sortedUsers = [...users].sort((a, b) => {
			const valueA = a[field].toLowerCase();
			const valueB = b[field].toLowerCase();
			if (valueA < valueB) {
				return -1;
			}
			if (valueA > valueB) {
				return 1;
			}
		});
		if (sortFiled === field && sortOrder === "asc") {
			setUsers(sortedUsers.reverse());
			setSortOrder("desc");
		} else {
			setUsers(sortedUsers);
			setSortOrder("asc");
		}
		setSortField(field);
	};

	const deleteHandler = (userID) => {
		console.log("Deleting user with ID:", userID);
		const updatedUsers = users.filter((user) => user.id !== userID);
		console.log("Updated users after deletion:", updatedUsers);
		setUsers(updatedUsers);
	};

	// ! addUser
	const addUser = (newUser) => {
		const id = uuidv4()
		setUsers([...users, {...newUser,	id}]);
	};
	return (
		<div>
			{showAddForm && <Add addUser={addUser} />}
			<div className="flex justify-center p-4">
				<Button onClick={toggleAddForm} pill>
					{showAddForm ? "Hide Form" : "Add User"}
				</Button>
			</div>
		
			<div>
				<Table hoverable striped>
					<Table.Head>
						<Table.HeadCell
							onClick={() => sortHandler("name")}
							className="cursor-pointer flex items-center"
						>
							Name <FaSort />
						</Table.HeadCell>
						<Table.HeadCell
							onClick={() => sortHandler("username")}
							className="cursor-pointer "
						>
							{" "}
							<p className="flex items-center">
								{" "}
								Username <FaSort />
							</p>{" "}
						</Table.HeadCell>
						<Table.HeadCell
							onClick={() => sortHandler("email")}
							className="cursor-pointer "
						>
							{" "}
							<p className="flex items-center">
								Email <FaSort />
							</p>{" "}
						</Table.HeadCell>
						<Table.HeadCell>Action</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{loading ? (
							<h1 className="text-5xl">Loading...</h1>
						) : users.length > 0 ? (
							users.map((user) => (
								<Table.Row
									key={user.id}
									className="bg-white dark:border-gray-700 dark:bg-gray-800"
								>
									<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{user.name}
									</Table.Cell>
									<Table.Cell>{user.username}</Table.Cell>
									<Table.Cell>{user.email}</Table.Cell>
									<Table.Cell className="cursor-pointer flex pe-1 gap-2">
										<Button color="blue" size="xs" pill>
											Edit
										</Button>
										<Button
											color="failure"
											size="xs"
											pill
											onClick={() =>
												deleteHandler(user.id)
											}
										>
											Delete
										</Button>
									</Table.Cell>
								</Table.Row>
							))
						) : (
							<tr>
								<td colSpan="5">No users found</td>
							</tr>
						)}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
};

export default Home;
