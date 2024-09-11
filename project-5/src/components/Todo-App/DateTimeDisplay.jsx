import { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // const intervalId = setInterval(() => {
    setCurrentTime(new Date());
    // }, 1000); // Update every second

    // return () => clearInterval(intervalId);
  }, []);

  // Format the date to "Wednesday, 11 May"
  const formattedDate = currentTime.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  //   const formattedTime = currentTime.toLocaleTimeString(); // e.g., "11:43:30 AM"

  return (
    <div className="flex flex-col text-sm font-semibold">
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTimeDisplay;
