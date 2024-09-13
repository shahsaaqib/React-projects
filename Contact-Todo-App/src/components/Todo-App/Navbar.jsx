import DateTimeDisplay from "./DateTimeDisplay";

/* eslint-disable react/no-unescaped-entities */
const Navbar = () => {
  return (
    <div className="my-4 flex h-[65px] flex-col items-center justify-center gap-2 rounded-lg bg-white text-xl font-bold">
      <div className="mt-2 flex gap-2">
        <img src="/logos_firebase.svg" alt="firebase logo" />
        <h1>Today's Tasks</h1>
      </div>
      <DateTimeDisplay />
    </div>
  );
};

export default Navbar;
