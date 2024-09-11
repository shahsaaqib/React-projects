const Button = ({ text }) => {
  return (
    <button className="rounded-lg px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-lime-300 hover:text-black hover:shadow-sm">
      {text}
    </button>
  );
};

export default Button;
