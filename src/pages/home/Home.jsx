import "./home.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiDoubleQuotesL } from "react-icons/ri";
import { getHome } from "../../utils/api/homeApi";
import ShowImage from "../../utils/data/showImage";
import IconImage from "../../utils/data/iconImage";
import Wire from "../../resources/images/img3.png";
import Bulb from "../../resources/images/img4.png";
import Repair from "../../resources/images/img2.png";
import Img5 from "../../resources/images/img5.png";
import Img6 from "../../resources/images/img6.png";
import Img7 from "../../resources/images/img7.png";
import Img8 from "../../resources/images/img8.png";
import Laura from "../../resources/images/review1.jpeg";
import Person2 from "../../resources/images/review2.jpg";
import Person3 from "../../resources/images/review3.jpeg";
import Socket2 from "../../resources/images/contact.png";
import { Button, Form, Input, DatePicker, Rate } from "antd";
import Appliance from "../../resources/images/img1.png";
const { TextArea } = Input;

const Home = () => {
  const [state, setState] = useState({
    homes: [],
    error: null,
  });
  const navigate = useNavigate();

  const fetchHomes = () => {
    setState({ ...state, error: null });
    getHome()
      .then(({ data }) => setState({ ...state, homes: data, error: null }))
      .catch({ ...state, error: null });
  };

  useEffect(() => {
    fetchHomes();
  }, []);
  return (
    <>
      <section className="global">
        <div className="home-grid">
          <div className="home-image">
            <div className="container">
              <div className="over-image">
                <h1>
                  Best <span className="span">Electricity</span> Service
                </h1>
                <h1>For Your Family</h1>
                <p
                  style={{
                    textAlign: "left",
                  }}
                >
                  Welcome to our electric shop, your one-stop solution for all
                  things electrical. We offer top-notch products and expert
                  repair services to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="second-section">
            <div className="ss-heading">
              <h1>Our Services to Explore</h1>
              <p>
                We provide expert repairs for all your electrical goods,
                ensuring reliable performance and extending their lifespan.
              </p>
            </div>
            <div className="icon-grid topMargin">
              <div className="icon-card">
                <img src={Repair} alt="repair" />
                <h4>Emergency Repairs</h4>
                <p>
                  Fast and dependable emergency repairs, ensuring your
                  electrical needs are promptly addressed and resolved.
                </p>
              </div>
              <div className="icon-card">
                <img src={Wire} alt="wire" />
                <h4>Wiring Checkup</h4>
                <p>
                  Thorough and professional wiring checkup services to ensure
                  the safety and efficiency of your electrical system.
                </p>
              </div>
              <div className="icon-card">
                <img src={Appliance} alt="appliance" />
                <h4>Appliance Repairs</h4>
                <p>
                  Expert appliance repair services to restore the functionality
                  of your electrical appliances quickly and efficiently.
                </p>
              </div>
              <div className="icon-card">
                <img src={Bulb} alt="bulb" />
                <h4>Bulbs Replacement</h4>
                <p>
                  Efficient and hassle-free bulb replacement services to
                  brighten up your space with optimal lighting solutions.
                </p>
              </div>
            </div>
            <div className="icon-grid topMargin">
              <div className="icon-card">
                <img src={Img5} alt="repair" />
                <h4>Electric Switch Repair</h4>
                <p>
                  Professional electric switch repair services to restore
                  functionality and ensure smooth operation of your electrical
                  switches.
                </p>
              </div>
              <div className="icon-card">
                <img src={Img6} alt="repair" />
                <h4>System Upgrades</h4>
                <p>
                  Enhance your electrical system with seamless and reliable
                  system upgrades for improved efficiency and performance.
                </p>
              </div>
              <div className="icon-card">
                <img src={Img7} alt="repair" />
                <h4>Circuit Breaker Repair</h4>
                <p>
                  Expert circuit breaker repair services to restore the safety
                  and proper functioning of your electrical system.
                </p>
              </div>
              <div className="icon-card">
                <img src={Img8} alt="repair" />
                <h4>Electrical Inspections</h4>
                <p>
                  Thorough and comprehensive electrical inspections to ensure
                  safety, code compliance, and optimal performance of your
                  system.
                </p>
              </div>
            </div>
          </div>

          <div className="third-section">
            <div className="ss-heading">
              <h1>We Providing Helpful Services</h1>
            </div>
            <div className="service-grid">
              {state?.homes?.map((h) => {
                return (
                  <>
                    <div className="details topMargin">
                      <ShowImage services={h?.image} url="uploads" />
                      <div className="details-info">
                        <IconImage services={h?.icon} url="uploads" />
                        <h2>{h?.title}</h2>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="fourth-section">
            <div className="contact-grid">
              <div>
                <h1>Contact Us</h1>
                <p
                  style={{
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                >
                  Contact us today for all your electrical needs. Our friendly
                  team is ready to assist you with any inquiries or service
                  requests.
                </p>
                <div className="contact-details">
                  <Form layout="vertical">
                    <div className="flex-input">
                      <Form.Item
                        name="FullName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your full name!",
                          },
                        ]}
                      >
                        <Input className="cd-input" placeholder="Full Name" />
                      </Form.Item>
                      <Form.Item
                        name="PhoneNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number!",
                          },
                        ]}
                      >
                        <Input
                          className="cd-input"
                          placeholder="Phone Number"
                        />
                      </Form.Item>
                    </div>
                    <div className="flex-input">
                      <Form.Item
                        name="RepairDate"
                        rules={[
                          {
                            required: true,
                            message: "Please choose the date!",
                          },
                        ]}
                      >
                        <DatePicker className="cd-input" />
                      </Form.Item>
                      <Form.Item
                        name="DeviceName"
                        rules={[
                          {
                            required: true,
                            message: "Please write your device name!",
                          },
                        ]}
                      >
                        <Input
                          className="cd-input"
                          placeholder="Device name like TV, Inverter"
                        />
                      </Form.Item>
                    </div>
                    <Form.Item
                      name="Address"
                      rules={[
                        {
                          required: true,
                          message: "Please input your address!",
                        },
                      ]}
                    >
                      <Input
                        className="single-input"
                        placeholder="Your Address"
                      />
                    </Form.Item>

                    <Form.Item
                      name="Condition"
                      rules={[
                        {
                          required: true,
                          message: "Please input device condition!",
                        },
                      ]}
                    >
                      <TextArea
                        className="text-input"
                        style={{
                          width: "93.5%",
                        }}
                        rows={6}
                        placeholder="Your message like condition of device and damage information"
                      />
                    </Form.Item>

                    <Button className="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
              <div>
                <img src={Socket2} alt="socket" />
              </div>
            </div>
          </div>

          <div className="fifth-section">
            <div className="ss-heading">
              <h1>Our Happy Clients</h1>
              <p>
                Join our list of satisfied customers who have experienced
                exceptional service and quality products.
              </p>
            </div>
            <div className="review-grid">
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  I wanted to share my positive experience at your electrical
                  shop. The staff provided excellent customer service, guiding
                  me to the right products for my project. The quality of the
                  items I purchased exceeded my expectations, and the repair
                  service was quick and reliable. I'm grateful for your
                  expertise and highly recommend your shop to anyone seeking
                  top-notch electrical solutions. Thank you for a job well done!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Laura} alt="person" />
                  <div className="role-div">
                    <h1>Devendra Sharma</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  I can't express how satisfied I am with my experience at your
                  electrical shop. The staff went above and beyond to assist me,
                  ensuring I found the perfect products. The quality of the
                  items surpassed my expectations, and the repair service was
                  exceptional. I highly recommend your shop to anyone seeking
                  reliable and top-quality electrical goods. Thank you for
                  providing outstanding customer service and products that
                  exceed expectations!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person2} alt="person" />
                  <div className="role-div">
                    <h1>Hari Aryal</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  Wow! I am blown away by the service I received at your
                  electrical shop. The staff was friendly, knowledgeable, and
                  helped me find exactly what I needed. The products I purchased
                  were of top-notch quality, and the repair service was
                  efficient and reliable. I am beyond satisfied and will
                  definitely be recommending your shop to friends and family.
                  Thank you for the outstanding experience!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person3} alt="person" />
                  <div className="role-div">
                    <h1>Gokandra Basnet</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
