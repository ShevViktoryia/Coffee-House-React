import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="container">
        <div className="heroContainer">
          <div className="heroContent">
            <h1>
              <span>Enjoy</span> premium coffee at our charming cafe
            </h1>
            <p>
              With its inviting atmosphere and delicious coffee options, the
              Coffee House Resource is a popular destination for coffee lovers
              and those seeking a warm and inviting space to enjoy their
              favorite beverage.
            </p>
            <a href="#" className="heroBtn">
              Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
