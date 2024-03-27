import React, { useState, useEffect, useRef } from "react";
import "./Aipos2.css";

//Import Icons
import { BsClouds } from "react-icons/bs";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { FaBoxTissue } from "react-icons/fa6";

const Aipos2 = () => {
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
      className={`aipos2Animation ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <section className="aiops2-section">
        <div className="aiops2-con">
          <div className="aiops2-con1">
            <h2>AIOps</h2>
            <p>
              No matter where you are along the path to AIOps, SL1 offers you
              the capabilities to progressively improve service visibility and
              automate your IT workflows to demonstrate business impact.
            </p>
          </div>
          <div className="aiops2-con2">
            <div className="aiops2-con21">
              <p className="aiops2-con21-p1">See</p>
              <p className="aiops2-con21-p2">Contextualize</p>
              <p className="aiops2-con21-p3">Act</p>
            </div>

            <div className="aiops2-con3">
              <div className="aiops2-con4">
                <div className="aiops2-con3-col1 row1">
                  <BsClouds className="aiposicon1" />
                  Hybrid Cloud Monitoring
                </div>
                <div className="aiops2-con4-col1 colm1">
                  <BsClouds className="aiposicon1" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                  <BsClouds className="aiposicon1" />
                  <h3>Bridge the Visibility Gap</h3>
                  <p>
                    Connect the dots on dependencies between legacy and modern
                    technology in your hybrid IT landscape with cross-domain
                    infrastructure , application, and service topology maps.
                  </p>
                  <BsClouds className="aiposicon1" />
                  <h3>Improve Service Performance</h3>
                  <p>
                    Leverage cross-domain topology to correlate and assess
                    impact, reduce event noise, expedite troubleshooting and
                    remediation, and better yet, avoid outages altogether.
                  </p>
                </div>
              </div>

              <div className="aiops2-con4">
                <div className="aiops2-con3-col1 row2">
                  <BsBuildingFillGear className="aiposicon2" />
                  Business Service Visibility
                </div>
                <div className="aiops2-con4-col1 colm2">
                  <BsBuildingFillGear className="aiposicon2" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                  <BsBuildingFillGear className="aiposicon2" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                  <BsBuildingFillGear className="aiposicon2" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                </div>
              </div>

              <div className="aiops2-con4">
                <div className="aiops2-con3-col1 row3">
                  <FaComputer className="aiposicon3" />
                  ITSM Workflow Automation
                </div>
                <div className="aiops2-con4-col1 colm3">
                  <FaComputer className="aiposicon3" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                  <FaComputer className="aiposicon3" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                  <FaComputer className="aiposicon3" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                </div>
              </div>

              <div className="aiops2-con4">
                <div className="aiops2-con3-col1 row4">
                  <FaBoxTissue className="aiposicon4" />
                  IT Workflow Automation
                </div>

                <div className="aiops2-con4-col1 colm4">
                  <FaBoxTissue className="aiposicon4" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                  <FaBoxTissue className="aiposicon4" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                  <FaBoxTissue className="aiposicon4" />
                  <h3>Unify Infrastructure Monitoring</h3>
                  <p>
                    Monitor performance across physical, virtual,
                    software-defined, and cloud-based network, storage, and
                    compute resources running on-premises and/or in a
                    multi-cloud estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Aipos2;
