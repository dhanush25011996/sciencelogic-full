import React, { useState, useEffect, useRef } from "react";
import "./Automate.css";

//Import Images
import { svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8 } from "./images";

const Automate = () => {
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
      className={`automateSectionAnimation ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <div className="automateContent">
        <div className="automateHeader">
          <div className="automateTitle">
            <h2>Automate and Synchronize</h2>
          </div>

          <div className="automateDescription">
            <div className="paragraph">
              <p>
                Connect SL1 to your hybrid IT estate and get data flowing,
                achieve CMDB accuracy, and power automated workflows across{" "}
                <a href="#">multiple systems and tools.</a>
              </p>
            </div>
            <div className="paragraph">
              <p>
                Leverage our highly scalable, real-time SL1 PowerFlow service to
                synchronize SL1 data with your IT ecosystem tools and platforms.
                Automate data and process workflows between your ITSM,
                Notification, BI/Analytics, DevOps, Security, Financial,
                Orchestration, and Configuration Management tools, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="dataFederationHeader">
          <h3>Data Federation</h3>
        </div>

        <div className="dataFederationSmallCard">
          <div className="smallCardCol prev1">
            <div className="smallCard">APIs</div>
          </div>
          <div className="smallCardCol">
            <div className="smallCard">Workflows</div>
          </div>
          <div className="smallCardCol next1">
            <div className="smallCard">Streams</div>
          </div>
        </div>

        <div className="plusDivider">
          <span>+</span>
        </div>

        <div className="toolsIntegrationLargeCard fourCol">
          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg1} alt="svg1" />
                </figure>
                <h6>CMDB</h6>
                <p>ServiceNow, Cherwell</p>
              </div>
            </div>
          </div>

          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg2} alt="svg2" />
                </figure>
                <h6>Security</h6>
                <p>
                  Nessus, National Vulnerability DB, <br /> Tanium, Splunk
                </p>
              </div>
            </div>
          </div>

          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg3} alt="svg3" />
                </figure>
                <h6>CI/CD</h6>
                <p>Jenkins, Atlassian</p>
              </div>
            </div>
          </div>

          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg4} alt="svg4" />
                </figure>
                <h6>Config & Change Mgmt</h6>
                <p>Restorepoint, ServiceNow</p>
              </div>
            </div>
          </div>

          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg5} alt="svg5" />
                </figure>
                <h6>Incident/Notification</h6>
                <p>
                  PagerDuty, xMatters, Slack, MSFT, <br /> Teams, ServiceNow,
                  Cherwell
                </p>
              </div>
            </div>
          </div>

          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg6} alt="svg6" />
                </figure>
                <h6>BI/Analytics</h6>
                <p>Watson, Google, Splunk</p>
              </div>
            </div>
          </div>

          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg7} alt="svg7" />
                </figure>
                <h6>Financial</h6>
                <p>Apptio</p>
              </div>
            </div>
          </div>

          <div className="toolsIntegrationCol">
            <div className="toolsIntegrationInner">
              <span className="toolsIntegrationOverlay"></span>
              <div className="toolsIntegrationCard">
                <figure>
                  <img src={svg8} alt="svg8" />
                </figure>
                <h6>Orchestration</h6>
                <p>Ansible, Puppet, Chef</p>
              </div>
            </div>
          </div>
        </div>

        <div className="backToOverview">
          <a href="#platform_overview">Back to platform overview</a>
        </div>
      </div>
    </section>
  );
};

export default Automate;
