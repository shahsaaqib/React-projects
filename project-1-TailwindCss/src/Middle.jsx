const Middle = () => {
  return (
    <div className=" flex mt-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-[108px] leading-[102px] font-extrabold">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="max-w-[404] text-gray-600 text-[16px]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className=" flex gap-6">
          <button className=" bg-customRed text-white h-[31px] w-[150px] items-center font-semibold ">
            Shop Now
          </button>
          <button className=" bg-transparent text-gray-700 h-[31px] w-[150px] items-center font-semibold border border-black ">
            Category
          </button>
        </div>
        <p className="font-medium mt-2">Also Available On</p>
        <div className="flex gap-4 mt-2">
          <a href="https://www.flipkart.com" target="_blank">
            <img src="./images/flipkart.png" alt="flipkart" />
          </a>
          <a href="https://www.amazon.in" target="_blank">
            <img src="./images/amazon.png" alt="amazon" />
          </a>
        </div>
      </div>
      <img src="./images/shoe_image.png" alt="Shoe Image" />
    </div>
  );
};

export default Middle;
