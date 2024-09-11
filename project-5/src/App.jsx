import { useState } from "react";
import ContactApp from "./components/Contact-App/ContactApp";
import TodoApp from "./components/Todo-App/TodoApp";

const App = () => {
  const [selectedApp, setSelectedApp] = useState("contact");

  return (
    <div className="mx-auto max-w-[370px]">
      <div className="mt-3 flex items-center justify-center gap-2">
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
