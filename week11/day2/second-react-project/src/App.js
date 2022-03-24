import "./App.css";
import Plot from "react-plotly.js";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Body from "./Body";
import Status from "./Status";
import { useState } from "react";
function App() {
  const data = [
    {
      values: [19, 26, 55],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
    },
  ];
  const layout = {
    height: 600,
    width: 700,
  };
  const [bodyStatus, setBodyStatus] = useState("");
  const [headerStatus, setHeaderStatus] = useState("");
  const [sidebarStatus, setSidebarStatus] = useState("");
  const [footerStatus, setFooterStatus] = useState("");
  return (
    <div className="App">
      <Status
        bodyStatus={bodyStatus}
        headerStatus={headerStatus}
        sidebarStatus={sidebarStatus}
        footerStatus={footerStatus}
      />
      <div className="header">
        <Header StatusBody={setHeaderStatus} />
      </div>
      <div className="middle">
        <div className="sidebar">
          <Sidebar StatusBody={setSidebarStatus} />
        </div>
        <div className="body">
          <Body StatusBody={setBodyStatus} />
          <Plot data={data} layout={layout} />
        </div>
      </div>
      <div className="footer">
        <Footer StatusBody={setFooterStatus} />
      </div>
    </div>
  );
}

export default App;
