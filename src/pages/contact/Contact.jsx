import React from "react";
import "./contact.css";
import Socket2 from "../../resources/images/socket2.jpg";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, DatePicker } from "antd";
import { useForm } from "@formspree/react";
const { TextArea } = Input;

const Contact = () => {
  const [states, handleSubmit] = useForm("xayzvadn");
  const navigate = useNavigate();
  if (states.succeeded) {
    return (
      <>
        <div>
          <p>Thankyou your booking has been placed!</p>;
        </div>
        {setTimeout(() => {
          navigate("/");
        }, 1000)}
      </>
    );
  }
  return (
    <>
      <section className="global">
        <div className="container highMargin">
          <div className="heading">
            <h1>Contact us</h1>
            <p
              id="pp"
              style={{
                width: "40%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              at quasi, vel veritatis ex odio praesentium facere molestias quo
              ullam.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <Form onFinish={handleSubmit} layout="vertical">
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
                    <Input className="cd-input" placeholder="Phone Number" />
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
                  <Input className="single-input" placeholder="Your Address" />
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

            <div>
              <img src={Socket2} alt="socket" />
            </div>
          </div>
          <div className="highMargin">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7031.763194614592!2d83.95380754871137!3d28.21090969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595725bc9930d%3A0xfd0d87b1ec03fa05!2sAcharya%20Electronics%20%26%20Supplier!5e0!3m2!1sen!2snp!4v1683301233768!5m2!1sen!2snp"
              width="100%"
              height="550"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mappu"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
