import React from "react";
import Faq from "react-faq-component";

const Faqs = () => {
  const data = {
    rows: [
      {
        title: "How do I know if I need electrical repair services?",
        content: `Look out for warning signs such as flickering lights, frequent circuit breaker trips, burning smells, or outlets not working. If you experience any of these issues, it's time to contact a professional electric repair service.`,
      },

      {
        title: "Are your electricians licensed and certified?",
        content: `Yes, all our electricians are fully licensed, certified, and highly skilled in handling various electrical repair and maintenance tasks. You can trust their expertise to address your electrical concerns safely and efficiently.`,
      },

      {
        title: "What types of electrical appliances and systems do you repair?",
        content: `We provide repair services for a wide range of electrical appliances and systems, including but not limited to lighting fixtures, circuit breakers, outlets, switches, ceiling fans, and electrical panels. If you have a specific electrical item that needs repair, feel free to inquire about it.`,
      },
      {
        title: "Do you offer emergency electrical repair services?",
        content: `Yes, we understand that electrical issues can occur at any time and might require urgent attention. That's why we offer 24/7 emergency electrical repair services to address your problems promptly and ensure the safety of your home or business.`,
      },
      {
        title: "How much will the electrical repair service cost?",
        content: `The cost of electrical repair services can vary depending on the nature and complexity of the problem. We offer transparent pricing, and our electricians will provide an estimate after assessing the issue at your location. Rest assured, we strive to offer competitive and fair pricing for all our services.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    bgColor: "#fff",
    rowContentColor: "black",
    arrowColor: "black",
    transitionDuration: "0.8s",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  return (
    <section className="global">
      <div className="container highMargin">
        <div className="heading">
          <h1>Frequently Asked Questions</h1>
        </div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </section>
  );
};

export default Faqs;
