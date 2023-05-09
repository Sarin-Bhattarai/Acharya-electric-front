import "./services.css";
import React, { useState, useEffect } from "react";
import { getServices } from "../../utils/api/serviceApi";
import ShowService from "../../utils/data/showService";
import S1 from "../../resources/images/s1.jpg";
import Lion from "../../resources/images/lion.jpg";
import Cinema from "../../resources/images/cinema.jpg";
import Weed from "../../resources/images/weed.jpg";
import Sakki from "../../resources/images/sakki.jpg";

const Services = () => {
  const [state, setState] = useState({
    services: [],
    error: null,
  });

  const fetchServices = () => {
    setState({ ...state, error: null });
    getServices()
      .then(({ data }) => setState({ ...state, services: data, error: null }))
      .catch({ ...state, error: null });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="global">
      <div className="container highMargin">
        <div className="service-grid">
          <div className="heading">
            <h1>
              Best <span className="span">Serving</span> Industry
            </h1>
            <h2>
              In <span className="span">Context</span> Of Nepal
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis neque quod dolore odit, ducimus atque facilis
              recusandae qui! Blanditiis ipsam itaque, tempore inventore
              pariatur voluptatem a molestias modi dolorum omnis?
            </p>
          </div>
          <div className="service-card" id="rr">
            <img src={S1} alt="s1" />
            <h4>Service I</h4>
          </div>
          <div
            style={{
              marginTop: "5%",
            }}
            className="service-card"
          >
            <img src={Lion} alt="s1" />
            <h4>Service II</h4>
          </div>
        </div>

        <div
          className="service-grid"
          style={{
            marginTop: "40px",
          }}
        >
          <div className="service-card" id="rr">
            <img src={Cinema} alt="s1" />
            <h4>Service III</h4>
          </div>
          <div
            style={{
              marginTop: "7%",
            }}
            className="service-card"
          >
            <img src={Weed} alt="s1" />
            <h4>Service IV</h4>
          </div>
          <div
            style={{
              marginTop: "20%",
            }}
            className="service-card"
          >
            <img src={Sakki} alt="s1" />
            <h4>Service V</h4>
          </div>
        </div>

        <div className="res-grid highMargin">
          {state.services.map((s) => {
            return (
              <>
                <div className="res-details">
                  <ShowService services={s?.image} url="uploads" />
                  <h1>{s?.title}</h1>
                  <p>{s?.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
