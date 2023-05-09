import "./about.css";
import React from "react";
import { Button } from "antd";
import C1 from "../../resources/images/c1.jpg";
import C2 from "../../resources/images/c2.jpg";

const About = () => {
  return (
    <section className="global">
      <div className="container highMargin">
        <div className="aa-grid">
          <div className="heading">
            <h5>LOREM IMPLSIVE DONOR</h5>
            <h1>FALANO COMPANY</h1>
            <h1>SINCE 2020</h1>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              praesentium numquam harum ipsa illum ipsum nisi a. Nemo aliquid
              ducimus excepturi praesentium id ipsa quis facilis nesciunt itaque
              molestias! Corporis sapiente eveniet repellat magnam laboriosam,
              voluptates architecto cum nisi accusamus vel assumenda optio,
              fugit eius rerum enim. Vitae velit cupiditate quod ipsa? Fugiat
              molestiae doloribus odio ipsum officiis saepe, non accusamus
              cumque
            </p>
            <Button className="primary">Deal with us</Button>
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
            <h5>LOREM IMPLSIVE DONOR</h5>
            <h1>WHY CHOOSE OUR</h1>
            <h1>COMPANY</h1>
            <p
              style={{
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              praesentium numquam harum ipsa illum ipsum nisi a. Nemo aliquid
              ducimus excepturi praesentium id ipsa quis facilis nesciunt itaque
              molestias! Corporis sapiente eveniet repellat magnam laboriosam,
              voluptates architecto cum nisi accusamus vel assumenda optio,
              fugit eius rerum enim. Vitae velit cupiditate quod ipsa? Fugiat
              molestiae doloribus odio ipsum officiis saepe, non accusamus
              cumque
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
