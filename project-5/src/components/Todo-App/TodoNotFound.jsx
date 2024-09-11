import { GiCrossMark } from "react-icons/gi";

const TodoNotFound = () => {
  return (
    <div className="m-auto mt-28 flex items-center gap-3">
      <GiCrossMark className="text-5xl" />
      <h3 className="text-2xl font-bold text-orange">No Todo</h3>
    </div>
  );
};

export default TodoNotFound;
