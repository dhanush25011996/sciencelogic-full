import React, { useState, useEffect, useRef } from "react";
import "./Monitor2.css";

//Import Icons
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { FaAmazonPay } from "react-icons/fa";
import { FaAsymmetrik } from "react-icons/fa";

const Monitor2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`monitor2Animation ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <section className="monitor_section02">
        <div className="monitor_section2">
          <h5>Agent and Agentless Data Collection</h5>
          <div className="monitor_section2-con1">
            <p className="mb1">API</p>
            <p className="mb2">Events</p>
            <p className="mb3">Polled</p>
            <p className="mb4">Streams</p>
            <p className="mb5">Logs</p>
            <p className="mb6">OS Forensics</p>
            <p className="mb7">Custom</p>
            <p className="mb8">Agents</p>
          </div>
          <IoMdAdd className="con23plus" />
          <div className="monitor_section2-con23">
            <div className="con23-con2  mbo1">
              <FaAmazonPay className="con23-logo" />
              <div>Data Center</div>
              <p>Storage,COmpute,Converged,VMwore</p>
            </div>
            <div className="con23-con2  mbo2">
              <FaAsymmetrik className="con23-logo" />
              <div>Network</div>
              <p>Network, Config, Software-Defined</p>
            </div>
            <div className="con23-con2 mbo3">
              <FaAmazonPay className="con23-logo" />
              <div>Applications</div>
              <p>App Components, APM, User Experience</p>
            </div>
            <div className="con23-con2 mbo4">
              <FaAsymmetrik className="con23-logo" />
              <div>Native Cloud</div>
              <p>Containers, Microservices, Serverless, Kubernetes, Docker</p>
            </div>
            <div className="con23-con2 mbo5">
              <FaAsymmetrik className="con23-logo" />
              <div>Public Cloud</div>
              <p>Multi-cloud, AWS, Azure, Google</p>
            </div>
          </div>
          <IoMdAdd className="con23plus" />
          <div className="monitor_section2-con24">
            <p className="m01">Events</p>
            <p className="m02">Metrics</p>
            <p className="m03">Logs</p>
            <p className="m04">Topology</p>
            <p className="m05">Metadata</p>
            <p className="m06">Configuration</p>
            <p className="m07">API Telemetry</p>
          </div>
          <p className="last-p">
            BACK TO PLATFORM OVERVIEW{" "}
            <IoIosArrowDropup className="lastp-logo" />
          </p>
        </div>
      </section>
    </section>
  );
};

export default Monitor2;
