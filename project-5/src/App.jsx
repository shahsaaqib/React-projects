import { useState } from "react";
import ContactApp from "./components/Contact-App/ContactApp";
import TodoApp from "./components/Todo-App/TodoApp";

const App = () => {
  const [selectedApp, setSelectedApp] = useState("contact");

  return (
    <div>
      <div className="mx-auto mt-3 flex max-w-[370px] items-center justify-center gap-2">
        <button
          onClick={() => setSelectedApp("contact")}
          className="w-[126px] rounded-lg border-4 border-orange p-3 font-bold text-white"
        >
          Contact APP
        </button>
        <button
          onClick={() => setSelectedApp("todo")}
          className="w-[126px] rounded-lg border-4 border-orange p-3 font-bold text-white"
        >
          Todo APP
        </button>
      </div>
      <div>{selectedApp === "contact" ? <ContactApp /> : <TodoApp />}</div>
    </div>
  );
};

export default App;
