import React, { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSort } from "react-icons/fa";

const Home = () => {
	const [users, setUsers] = useState([]);

	const userData = async () => {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users`
			);
			setUsers(response.data);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	useEffect(() => {
		userData();
	}, []);

	return (
		<div>
			<Link to="add" className="flex justify-center p-4" >
				<Button pill >Add User</Button>
			</Link>
			<div>
				<Table hoverable striped>
					<Table.Head>
						<Table.HeadCell>Name</Table.HeadCell>
						<Table.HeadCell>Username</Table.HeadCell>
						<Table.HeadCell>Email</Table.HeadCell>
						<Table.HeadCell className="flex items-center ">
							ID <FaSort className="cursor-pointer" />
						</Table.HeadCell>
						<Table.HeadCell>Action</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{users.length > 0 ? (
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
									<Table.Cell>{user.id}</Table.Cell>
									<Table.Cell>
										<Link
											to="add"
											className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
										>
											Edit
										</Link>
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
