import "./services.css";
import React, { useState, useEffect } from "react";
import { getServices } from "../../utils/api/serviceApi";
import ShowService from "../../utils/data/showService";
import Service1 from "../../resources/images/service1.png";
import Service2 from "../../resources/images/service2.png";
import Service3 from "../../resources/images/service3.png";
import Service4 from "../../resources/images/service4.png";
import Service5 from "../../resources/images/service5.png";

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
              In <span className="span">Context</span> Of Pokhara
            </h2>
            <p>
              Everything related to electrical system failure problem can be
              fixed by us and the charge is also affordable according to the
              repairings. We offer our services all over Pokhara.
            </p>
          </div>
          <div className="service-card" id="rr">
            <img src={Service1} alt="s1" />
            <h4>Wiring Check up</h4>
          </div>
          <div
            style={{
              marginTop: "5%",
            }}
            className="service-card"
          >
            <img src={Service2} alt="s1" />
            <h4>Appliance Repair</h4>
          </div>
        </div>

        <div
          className="service-grid"
          style={{
            marginTop: "40px",
          }}
        >
          <div className="service-card" id="rr">
            <img src={Service3} alt="s1" />
            <h4>Bulb Replacement</h4>
          </div>
          <div
            style={{
              marginTop: "7%",
            }}
            className="service-card"
          >
            <img src={Service4} alt="s1" />
            <h4>Television Repair</h4>
          </div>
          <div
            style={{
              marginTop: "20%",
            }}
            className="service-card"
          >
            <img src={Service5} alt="s1" />
            <h4>Fan Repair</h4>
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
