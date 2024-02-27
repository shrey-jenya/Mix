    import React from "react";
    import { useDispatch } from "react-redux";
    import { deleteTodo } from "../../features/TodoSlice";
    // import { ToastContainer, Zoom, toast } from "react-toastify";

    const Button = ({ onDelete ,onEdit}) => {
        // ! Delete Handler
        const deleteHandler = () => {
            onDelete();
        };
        // ! Edit Handler
        const handleEdit = () => {
            onEdit();
        };
        // ! Archive Handler
        const archiveHandler = () => {
            console.log("archived");
            // toast.success("task Archived Successfully");
        };
        return (
            <div >
                <button
                    className=" hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 "
                    onClick={deleteHandler}
                >
                    Delete
                </button>
                <button
                    className="hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 "
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    className="hover:-translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-300 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 "
                    onClick={() => archiveHandler()}
                >
                    Archive
                </button>
                {/* <ToastContainer
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
                    transition={Zoom}
                /> */}
            </div>
        );
    };

    export default Button;
