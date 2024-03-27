import React, { useState, useEffect, useRef } from "react";
import "./Section2.css";

//Import Icons
import { FaAmazonPay } from "react-icons/fa";
import { FaAsymmetrik } from "react-icons/fa";
import { GrAscend } from "react-icons/gr";
import { GrBeacon } from "react-icons/gr";
import { GrCentos } from "react-icons/gr";
import { GrCloudlinux } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";

const Section2 = () => {
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
      className={`section2Animation ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <section className="ScienceLogic-SL1_grad2">
        <div className="ScienceLogic-grad2-sec1">
          <h1>Connected Ecosystem</h1>
          <p>
            Intelligent automations rely on seamless flow of normalized data
            within an IT estate. SL1 connects your estate together to automate
            multi-directional data flows and workflows.
          </p>
        </div>
        <div className="ScienceLogic-grad2-sec2">
          <div className="ScienceLogic-sec2-1">
            <h6>Agent and Agentless Data Collection</h6>
            <div className="left-con1">
              <p className="bcard1">API</p>
              <p className="bcard2">Events</p>
              <p className="bcard3">Polled</p>
              <p className="bcard4">Streams</p>
              <p className="bcard5">Logs</p>
              <p className="bcard6">OS Forensics</p>
              <p className="bcard7">Custom</p>
              <p className="bcard8">Agents</p>
            </div>
            <div className="left-con2">
              <div className="con2 bo1">
                <FaAmazonPay className="con2-logo" />
                <div>Data Center</div>
                <p>Storage,COmpute,Converged,VMwore</p>
              </div>
              <div className="con2 bo2">
                <FaAsymmetrik className="con2-logo" />
                <div>Data Center</div>
                <p>Storage,COmpute,Converged,VMwore</p>
              </div>
              <div className="con2 bo3">
                <FaAmazonPay className="con2-logo" />
                <div>Data Center</div>
                <p>Storage,COmpute,Converged,VMwore</p>
              </div>
              <div className="con2 bo4">
                <FaAsymmetrik className="con2-logo" />
                <div>Data Center</div>
                <p>Storage,COmpute,Converged,VMwore</p>
              </div>
              <div className="con2 bo5">
                <FaAsymmetrik className="con2-logo" />
                <div>Data Center</div>
                <p>Storage,COmpute,Converged,VMwore</p>
              </div>
            </div>
            <div className="left-con3">
              <p className="ocard21">Events</p>
              <p className="ocard22">Metrics</p>
              <p className="ocard23">Logs</p>
              <p className="ocard24">Topology</p>
              <p className="ocard25">Metadata</p>
              <p className="ocard26">Configuration</p>
              <p className="ocard27">API Telemetry</p>
            </div>
          </div>
          <div className="ScienceLogic-sec2-2">
            <div className="sec2-2-1">
              <h3>Monitor</h3>
              <IoIosAddCircleOutline className="plus" />
              <br />
              <FaArrowRightLong className="rigtharrow" />
            </div>
            <div className="sec2-2-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1610 320">
                <path
                  fill="#245a8c"
                  fill-opacity="1"
                  d="M0,320L60,320C120,320,240,320,360,293.3C480,267,600,213,720,202.7C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>

              <div className="box1">AIOps</div>
              <div className="box2">The ScienceLogic SL1 Platform</div>
            </div>
            <div className="sec2-2-3">
              <h3>Automate & Synchronize</h3>
              <IoIosAddCircleOutline className="plus" />
              <br />
              <FaArrowRightArrowLeft className="botharrow" />
            </div>
          </div>

          <div className="ScienceLogic-sec2-3">
            <h6>Data Federation</h6>
            <div className="right-con1">
              <p className="bcard21">APIs</p>
              <p className="bcard22">Workflows</p>
              <p className="bcard23">Streams</p>
            </div>
            <div className="right-con2">
              <div className="right-con2-child bg1">
                <GrAscend className="child-logo" />
                <div>CMDB</div>
                <p>
                  PagerDuty, xMatters, Slack, MSFT Teams, ServiceNow, Cherwell
                </p>
              </div>
              <div className="right-con2-child bg2">
                <GrBeacon className="child-logo" />
                <div>Security</div>
                <p>Nessus, National Vulnerability DB, Tanium, Splunk</p>
              </div>
              <div className="right-con2-child bg3">
                <GrCentos className="child-logo" />
                <div>CI/CD</div>
                <p>Jenkins, Atlassian</p>
              </div>
              <div className="right-con2-child bg4">
                <GrCloudlinux className="child-logo" />
                <div>Financial</div>
                <p>Restorepoint, ServiceNow</p>
              </div>
              <div className="right-con2-child bg5">
                <GrCentos className="child-logo" />
                <div>CI/CD</div>
                <p>Jenkins, Atlassian</p>
              </div>
              <div className="right-con2-child bg6">
                <GrCloudlinux className="child-logo" />
                <div>Financial</div>
                <p>Restorepoint, ServiceNow</p>
              </div>
              <div className="right-con2-child bg7">
                <GrBeacon className="child-logo" />
                <div>Security</div>
                <p>Nessus, National Vulnerability DB, Tanium, Splunk</p>
              </div>
              <div className="right-con2-child bg8">
                <GrCentos className="child-logo" />
                <div>CI/CD</div>
                <p>Jenkins, Atlassian</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section2;
