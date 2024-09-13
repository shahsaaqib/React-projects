import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase";
import { toast } from "react-toastify";

const AddUpdateTodo = ({ onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");

  const addTodo = async (e) => {
    try {
      e.preventDefault();
      const todo = { taskName, description, status };
      const contactRef = collection(db, "todos");
      await addDoc(contactRef, todo);
      onClose();
      toast.success("Task Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6">
        <h2 className="mb-4 text-lg font-bold">Add New Task</h2>
        <form onSubmit={addTodo}>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUpdateTodo;
