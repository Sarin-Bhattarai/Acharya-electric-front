import React from "react";
import "./portfolio.css";
import Portfolio2 from "../../resources/images/jjj.png";
import Wave from "../../resources/images/wave.jpg";

const Portfolio = () => {
  return (
    <section className="global">
      <div className="portfolio">
        <div className="container">
          <div className="over-portfolio">
            <h6>dd</h6>
            <h2>MY NAME IS</h2>
            <h1>SAILENDRA ACHARYA</h1>
          </div>
          <div className="yellow">
            <h4>I'M AN ElECTRICIAN</h4>
          </div>
        </div>
      </div>

      <div className="container highMargin">
        <div className="portfolio-grid">
          <div>
            <img src={Portfolio2} alt="img" />
          </div>
          <div>
            <div
              className="flex"
              style={{
                marginBottom: "25px",
              }}
            >
              <div className="pp-res">
                <h2>who am i</h2>
                <h1>HELLO</h1>
              </div>
              <img className="pp-img" src={Wave} alt="wave" />
            </div>
            <p
              style={{
                textAlign: "left",
                marginBottom: "15px",
              }}
            >
              Are you facing any electrical issues or looking to upgrade your
              home with the latest gadgets? Look no further! With over 12 years
              of experience in the field, I am a professional electrician who
              can handle all your electrical needs. From repairing and
              installing various electrical devices and systems, such as
              fridges, TVs, fans, and mobile phones, to providing comprehensive
              repair services for your entire household or building's electrical
              system, I've got you covered.
            </p>{" "}
            <p
              style={{
                textAlign: "left",
              }}
            >
              Looking for top-quality electric gadgets? Look no further! I have
              my own electric shop, serving as a trusted distributor of a wide
              range of appliances, including fridges, TVs, washing machines, and
              more. I take pride in offering only the best products known for
              their durability, performance, and energy efficiency. If you're
              experiencing issues with your electric gadgets or need assistance
              with your electrical system, call me at 9857475858 for
              personalized solutions. Trust Acharya Electrics for a safe and
              comfortable environment in your home or building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
