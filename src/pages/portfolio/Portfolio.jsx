import React from "react";
import "./portfolio.css";
import Portfolio2 from "../../resources/images/portfolio2.jpg";
import Wave from "../../resources/images/wave.jpg";

const Portfolio = () => {
  return (
    <section className="global">
      <div className="portfolio">
        <div className="container">
          <div className="over-portfolio">
            <h6>dd</h6>
            <h2>MY NAME IS</h2>
            <h1>PRADIP SHARMA</h1>
          </div>
          <div className="yellow">
            <h4>I'M A UI DEVELOPER</h4>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              ullam fugit impedit qui repellendus, culpa, quasi pariatur eius
              modi iure, magni dolore! Quod nostrum alias rem illo quidem vel,
              sunt perspiciatis magnam? Error nemo nihil assumenda fugiat. Iure
              quod fuga quam sed at facere vel sit perferendis quae asperiores
              eum accusantium, perspiciatis tenetur provident temporibus
              assumenda optio vitae sunt rerum!
            </p>{" "}
            <p
              style={{
                textAlign: "left",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              tempora atque ut commodi praesentium voluptates cumque dolores
              natus obcaecati exercitationem provident vitae itaque vel ea,
              error possimus ex ducimus fugiat placeat minus, suscipit cum. Nisi
              illo in eligendi nemo modi, nobis assumenda ex ipsa mollitia
              officia debitis ut libero, hic corrupti neque cumque deserunt
              molestias itaque? Laboriosam perferendis quidem nobis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
