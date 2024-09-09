import Middle from './Middle';
const App = () => {
  return (
    <div className=" max-w-[1280px] my-0 mx-auto ">
      <div className=" mt-[30px] flex justify-between h-[72px]">
        <img src="./images/brand_logo.png" alt="Brand Logo" />
        <ul className="flex gap-5">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className=" bg-customRed text-white h-[31px] w-[75px] items-center font-semibold">
          Login
        </button>
      </div>
      <Middle />
    </div>
  );
};

export default App;
