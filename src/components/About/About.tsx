import "./About.css";

export function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>
          Resource is <span>the perfect and cozy place</span> where you can
          enjoy a variety of hot beverages, relax, catch up with friends, or get
          some work done.
        </h2>
        <div className="aboutContent">
          <div className="imgAbout imgAbout1"></div>
          <div className="imgAbout imgAbout2"></div>
          <div className="imgAbout imgAbout3"></div>
          <div className="imgAbout imgAbout4"></div>
        </div>
      </div>
    </section>
  );
}
