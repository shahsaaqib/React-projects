const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="sec-button">Category</button>
        </div>
        <div className="hero-shop">
          <p>Also Available On</p>
          <div className="brand-icons">
            <a href="https://www.flipkart.com" target="_blank">
              <img src="./images/flipkart.png" alt="flipkart" />
            </a>
            <a href="https://www.amazon.in" target="_blank">
              <img src="./images/amazon.png" alt="amazon" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
