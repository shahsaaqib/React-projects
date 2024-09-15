import { LuListTodo } from "react-icons/lu";
import { HiOutlineLockOpen, HiOutlineLockClosed } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";
import AddUpdateTodo from "./AddUpdateTodo";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const TodoCard = ({ todo }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to update the task's status in Firebase
  const updateStatus = async (newStatus) => {
    try {
      const todoRef = doc(db, "todos", todo.id);
      await updateDoc(todoRef, { status: newStatus });
      todo.status = newStatus; // Optimistic UI update
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const getIconColor = (iconStatus) => {
    return todo.status === iconStatus ? "text-orange" : "text-black";
  };

  return (
    <>
      <div className={`relative ${isPopupOpen ? "blur-sm" : ""}`}>
        <div className="flex items-center justify-between rounded-lg bg-lime-400 p-2">
          <div className="ml-2 flex flex-col gap-2">
            <div className="flex gap-2">
              <LuListTodo
                onClick={() => setIsPopupOpen(true)}
                className="cursor-pointer text-3xl text-slate-100"
              />
              <h2 className="font-bold text-slate-600">{todo.taskName}</h2>
            </div>
            <p className="text-lg text-slate-600">{todo.description}</p>
          </div>
          <div className="mr-2 flex flex-col gap-2 text-xl">
            <div className="group relative">
              <HiOutlineLockOpen
                className={`cursor-pointer hover:text-orange ${getIconColor("open")}`}
                onClick={() => updateStatus("open")}
              />
              <span className="absolute -right-10 -top-2 hidden rounded-md bg-orange p-1 text-xs text-white group-hover:block">
                Open
              </span>
            </div>
            <div className="group relative">
              <HiOutlineLockClosed
                className={`cursor-pointer hover:text-orange ${getIconColor("closed")}`}
                onClick={() => updateStatus("closed")}
              />
              <span className="absolute -right-10 -top-2 hidden rounded-md bg-orange p-1 text-xs text-white group-hover:block">
                Close
              </span>
            </div>
            <div className="group relative">
              <IoArchiveOutline
                className={`cursor-pointer hover:text-orange ${getIconColor("archived")}`}
                onClick={() => updateStatus("archived")}
              />
              <span className="absolute -right-14 -top-2 hidden rounded-md bg-orange p-1 text-xs text-white group-hover:block">
                Archive
              </span>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <AddUpdateTodo onClose={() => setIsPopupOpen(false)} todo={todo} />
        </div>
      )}
    </>
  );
};

export default TodoCard;
