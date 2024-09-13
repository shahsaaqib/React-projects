const Button = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition duration-300 ease-in-out hover:bg-lime-300 hover:text-black hover:shadow-sm ${
        isActive ? "bg-lime-300 text-black shadow-sm" : "text-white"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
