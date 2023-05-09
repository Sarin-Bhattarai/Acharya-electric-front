import "./home.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiDoubleQuotesL } from "react-icons/ri";
import { getHome } from "../../utils/api/homeApi";
import ShowImage from "../../utils/data/showImage";
import IconImage from "../../utils/data/iconImage";
import Wire from "../../resources/images/wire.png";
import Bulb from "../../resources/images/bulb.png";
import Repair from "../../resources/images/repair.png";
import Laura from "../../resources/images/laura.png";
import Person2 from "../../resources/images/person2.jpg";
import Person3 from "../../resources/images/person3.jpg";
import Socket2 from "../../resources/images/contact.png";
import { Button, Form, Input, DatePicker, Rate } from "antd";
import Appliance from "../../resources/images/appliance.png";
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  voluptate cumque, vitae odio adipisci dignissimos mollitia
                  nostrum modi deserunt dolorum!
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                dicta quidem illum dolores, magni consequuntur.
              </p>
            </div>
            <div className="icon-grid topMargin">
              <div className="icon-card">
                <img src={Repair} alt="repair" />
                <h4>Emergency Repairs</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
                </p>
              </div>
              <div className="icon-card">
                <img src={Wire} alt="wire" />
                <h4>Wiring Checkup</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
                </p>
              </div>
              <div className="icon-card">
                <img src={Appliance} alt="appliance" />
                <h4>Appliance Repairs</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
                </p>
              </div>
              <div className="icon-card">
                <img src={Bulb} alt="bulb" />
                <h4>Bulbs Replacement</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
                </p>
              </div>
            </div>
            <div className="icon-grid topMargin">
              <div className="icon-card">
                <img src={Repair} alt="repair" />
                <h4>Emergency Repairs</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
                </p>
              </div>
              <div className="icon-card">
                <img src={Repair} alt="repair" />
                <h4>Emergency Repairs</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
                </p>
              </div>
              <div className="icon-card">
                <img src={Repair} alt="repair" />
                <h4>Emergency Repairs</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
                </p>
              </div>
              <div className="icon-card">
                <img src={Repair} alt="repair" />
                <h4>Emergency Repairs</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ullam aliquam fuga.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sint consequatur praesentium atque quibusdam quo?
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                dicta quidem.
              </p>
            </div>
            <div className="review-grid">
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  esse repellat cupiditate saepe perspiciatis provident tempora?
                  Omnis quae repellendus aut dolorem architecto nesciunt ratione
                  dolorum magni ullam atque, consequuntur optio, maxime est ea
                  debitis velit sequi fugit temporibus sit vel sapiente illum
                  tempore earum! Delectus earum autem ipsum debitis iusto.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Laura} alt="person" />
                  <div className="role-div">
                    <h1>Puja Sharma</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dolorem, assumenda eum ea cupiditate animi qui explicabo neque
                  veritatis in maiores odit mollitia officiis, at optio impedit
                  expedita voluptate? Recusandae ut rerum magni molestiae
                  asperiores. Nihil molestiae modi omnis. Quas culpa nihil modi
                  omnis laboriosam eveniet, molestias quia qui odit!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person2} alt="person" />
                  <div className="role-div">
                    <h1>John Doe</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ea quibusdam accusamus repellendus incidunt molestiae officia
                  laudantium quam facilis? Iure quasi earum quae tempore maiores
                  soluta eum odio aliquid totam doloribus nulla nostrum labore
                  placeat vel hic eveniet natus consequatur, ex dolorem
                  similique laudantium commodi excepturi. Necessitatibus fugit
                  quaerat modi.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person3} alt="person" />
                  <div className="role-div">
                    <h1>Samantha Basnet</h1>
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
