import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const AddUpdateTodo = ({ onClose, todo }) => {
  console.log(todo);
  const [taskName, setTaskName] = useState(todo ? todo.taskName : "");
  const [description, setDescription] = useState(todo ? todo.description : "");
  const [status, setStatus] = useState(todo ? todo.status : "open");

  // Adding a new todo
  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const newTodo = { taskName, description, status };
      const contactRef = collection(db, "todos");
      await addDoc(contactRef, newTodo);
      onClose();
      toast.success("Task Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Updating an existing todo
  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const todoRef = doc(db, "todos", todo.id);
      await updateDoc(todoRef, {
        taskName,
        description,
        status,
      });
      onClose();
      toast.success("Task Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      const todoRef = collection(db, "todos");
      await deleteDoc(doc(todoRef, id));
      toast.success("Task Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="mb-4 text-lg font-bold">
            {todo ? "Update Task" : "Add New Task"}
          </h2>
          {todo ? (
            <MdDelete
              className="cursor-pointer text-3xl text-red-600"
              onClick={() => deleteTodo(todo.id)}
            />
          ) : (
            ""
          )}
        </div>

        <form onSubmit={todo ? updateTodo : addTodo}>
          <div className="mb-4">
            <label className="mb-1 block font-semibold">Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="border-gray-300 w-full rounded border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-gray-300 w-full rounded border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-semibold">Status</label>
            <div className="flex gap-2">
              <label className="items-center font-semibold">
                <input
                  className="mr-1"
                  type="radio"
                  value="open"
                  checked={status === "open"}
                  onChange={() => setStatus("open")}
                />
                Open
              </label>
              <label className="items-center font-semibold">
                <input
                  className="mr-1"
                  type="radio"
                  value="closed"
                  checked={status === "closed"}
                  onChange={() => setStatus("closed")}
                />
                Closed
              </label>
              <label className="items-center font-semibold">
                <input
                  className="mr-1 text-xl"
                  type="radio"
                  value="archived"
                  checked={status === "archived"}
                  onChange={() => setStatus("archived")}
                />
                Archived
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="rounded bg-red-600 px-4 py-2 font-semibold"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-lime-400 px-4 py-2 font-semibold"
            >
              {todo ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUpdateTodo;
