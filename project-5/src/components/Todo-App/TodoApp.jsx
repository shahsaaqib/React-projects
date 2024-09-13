import Button from "./custom/Button";
import { TiPlus } from "react-icons/ti";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import TodoNotFound from "./TodoNotFound";
import TodoCard from "./TodoCard";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const getTodos = async () => {
      try {
        const todosRef = collection(db, "todos");
        onSnapshot(todosRef, (snapShot) => {
          const todoList = snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setTodos(todoList);
          return todoList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getTodos();
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    return todo.status === filter;
  });

  return (
    <div>
      <Navbar />
      <div className="flex h-14 items-center justify-between shadow-sm">
        <div className="flex">
          <Button
            text="All"
            onClick={() => setFilter("all")}
            isActive={filter === "all"}
          />
          <Button
            text="Open"
            onClick={() => setFilter("open")}
            isActive={filter === "open"}
          />
          <Button
            text="Closed"
            onClick={() => setFilter("closed")}
            isActive={filter === "closed"}
          />
          <Button
            text="Archived"
            onClick={() => setFilter("archived")}
            isActive={filter === "archived"}
          />
        </div>
        <div className="m-auto flex h-8 w-24 items-center justify-center rounded-3xl border border-yellow py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-lime-300 hover:text-black hover:shadow-sm">
          <TiPlus />
          <button>Add New</button>
        </div>
      </div>
      <div>
        <div className="mt-4 flex flex-col gap-3">
          {todos.length <= 0 ? (
            <TodoNotFound />
          ) : (
            filteredTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
