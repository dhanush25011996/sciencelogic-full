import React from "react";
import "./Monitor.css";

const Monitor = () => {
  return (
    <section className="monitor_section">
      <h4>Monitor</h4>
      <div className="monitor_section1">
        <div className="monitor_section1_one">
          Monitor a broad spectrum of legacy and modern technologies including
          major public clouds (AWS, Azure, Google), serverless and
          microservices-based technologies, virtualization solutions (e.g.,
          VMware), software-defined networks, servers, storage, unified
          communications, and more.
          <div className="monitor_section1_one_two">
            SL1 ingests a variety of data points such as availability,
            performance, events, and configuration via SNMP, API, SSH, Syslog,
            using agent-based and agentless techniques to create a unified
            operational data lake.
          </div>
        </div>
        <div className="monitor_section1_two">
          Leverage{" "}
          <span className="monitor_imptext">
            {" "}
            400+ out-of-the-box Monitoring PowerPacks
          </span>{" "}
          and easily extend your monitoring to support your unique business
          needs.
          <div className="monitor_section1_two_two">
            Can’t find what you need? Dive into our low-code SDK to build your
            own integrations using SSH/CLI, REST, JMX, and more. Break-down data
            silos to gain end-to-end visibility of your IT estate.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitor;
