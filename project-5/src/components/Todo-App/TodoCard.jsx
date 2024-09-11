import { LuListTodo } from "react-icons/lu";
import { HiOutlineLockOpen, HiOutlineLockClosed } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";

const TodoCard = ({ todo }) => {
  const { status } = todo;

  const getIconColor = (iconStatus) => {
    return status === iconStatus ? "text-orange" : "text-black";
  };
  return (
    <>
      <div className="flex items-center justify-between rounded-lg bg-lime-400 p-2">
        <div className="ml-2 flex flex-col gap-2">
          <div className="flex gap-2">
            <LuListTodo className="text-3xl text-slate-100" />
            <h2 className="font-bold text-slate-600">{todo.taskName} </h2>
          </div>
          <p className="text-lg text-slate-600">{todo.description} </p>
        </div>
        <div className="mr-2 flex flex-col gap-2 text-xl">
          <div className="group relative">
            <HiOutlineLockOpen
              className={`cursor-pointer hover:text-orange ${getIconColor("open")}`}
            />
            <span className="absolute -right-10 -top-2 hidden rounded-md bg-orange p-1 text-xs text-white group-hover:block">
              Open
            </span>
          </div>
          <div className="group relative">
            <HiOutlineLockClosed
              className={`cursor-pointer hover:text-orange ${getIconColor("closed")}`}
            />
            <span className="absolute -right-10 -top-2 hidden rounded-md bg-orange p-1 text-xs text-white group-hover:block">
              Close
            </span>
          </div>
          <div className="group relative">
            <IoArchiveOutline
              className={`cursor-pointer hover:text-orange ${getIconColor("archived")}`}
            />
            <span className="absolute -right-14 -top-2 hidden rounded-md bg-orange p-1 text-xs text-white group-hover:block">
              Archive
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
