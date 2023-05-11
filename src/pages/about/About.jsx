import "./about.css";
import React from "react";
import { Button } from "antd";
import C1 from "../../resources/images/c1.jpg";
import C2 from "../../resources/images/c2.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="global">
      <div className="container highMargin">
        <div className="aa-grid">
          <div className="heading">
            <h5>FAST ELECTRIC REPAIR</h5>
            <h1>ACHARYA ELECTRICS</h1>
            <h1>SINCE 2012</h1>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              We provide satisfying service to customer to the end. Our skilled
              team of professionals works tirelessly to ensure that our clients
              receive the best possible electrical services.Customer
              satisfaction is our top priority, and we understand the importance
              of having reliable and safe electrical systems. Our experienced
              electricians are dedicated to providing high-quality services,
              from routine maintenance to complex installations and upgrades.
            </p>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              className="primary"
            >
              Deal with us
            </Button>
          </div>
          <div className="aboutImg">
            <img src={C2} alt="c1" />
          </div>
        </div>

        <div className="aa-grid highMargin" id="aaa">
          <div className="aboutImg">
            <img src={C1} alt="c1" />
          </div>
          <div className="heading">
            <h5>HIGH QUALITY SERVICE</h5>
            <h1>WHY CHOOSE OUR</h1>
            <h1>COMPANY</h1>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              We believe in building strong relationships with our clients and
              take the time to understand their unique needs. We communicate
              clearly and effectively throughout the entire process, ensuring
              our clients are fully informed and happy with our work. Safety and
              efficiency are also paramount to us. We use the latest technology
              and tools to complete our work quickly and safely, minimizing
              downtime. Overall, I am proud of the work that our electrical
              company does. We are committed to providing exceptional electrical
              services that exceed our clients' expectations. Thank you for
              choosing us as your electrical service provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
