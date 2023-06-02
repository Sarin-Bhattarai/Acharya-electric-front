import "./about.css";
import React from "react";
import { Button } from "antd";
import C1 from "../../resources/images/mee.jpg";
import Dokan from "../../resources/images/dokan.jpg";
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
            <img src={Dokan} alt="c1" />
          </div>
        </div>

        <div className="aa-grid highMargin" id="aaa">
          <div className="aboutImg">
            <img src={C1} alt="c1" />
          </div>
          <div className="heading">
            <h5>HIGH QUALITY SERVICE</h5>
            <h1>WHY CHOOSE US</h1>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              At our electric shop, we believe in the power of building strong
              and lasting relationships with our valued clients. We prioritize
              understanding their unique needs, going the extra mile to ensure
              complete satisfaction. Our dedicated team takes the time to
              listen, communicate clearly, and provide personalized solutions
              tailored to each client. Throughout the entire process, we
              maintain transparent and effective communication, keeping our
              clients informed and involved, so they have full confidence in our
              work.
            </p>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Safety and efficiency are fundamental principles that guide our
              operations. We recognize the importance of a safe working
              environment for both our team members and our clients. That's why
              we adhere to the highest safety standards and invest in ongoing
              training for our staff. We are equipped with the latest technology
              and tools, enabling us to complete projects quickly and
              efficiently, minimizing any potential downtime and disruption.
            </p>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Our team takes immense pride in the work we do. We approach each
              project with unwavering dedication, attention to detail, and a
              commitment to excellence. From small repairs to large-scale
              installations, we deliver exceptional results that exceed our
              clients' expectations. We understand that electrical services play
              a critical role in our clients' lives, and we strive to make a
              positive impact by providing reliable and innovative solutions.
            </p>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              By choosing us as your electrical service provider, you are
              placing your trust in a company that values your satisfaction
              above all else. We are grateful for the opportunity to serve you
              and work tirelessly to earn and maintain your trust. Our goal is
              not just to meet your expectations but to surpass them, delivering
              outstanding service that leaves a lasting impression.
            </p>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Thank you for considering us for your electrical needs. We look
              forward to the opportunity to serve you and demonstrate the high
              level of professionalism and expertise that sets us apart.
              Together, let's create a strong and enduring partnership that will
              keep your electrical systems functioning at their best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
