import "./App.css";
import MainContainer from "./components/MainContainer";
import { useState } from "react";
import ciara from "./assets/ciara.png";
import jason from "./assets/jason.png";
import rayleigh from "./assets/rayleigh.png";
import santos from "./assets/santos.png";

function App() {
  const studentData = [
    { name: "Ciara", img: ciara },
    { name: "Rayleigh", img: rayleigh },
    { name: "Santos", img: santos },
    { name: "Jason", img: jason },
  ];
  const [students, setStudents] = useState(studentData);
  const [bcCrew, setBcCrew] = useState([]);
  const [binaryBots, setBinaryBots] = useState([]);

  const moveToBc = (student) => {
    let bc = {
      name: student.name,
      img: student.img,
    };
    setBcCrew([...bcCrew, bc]);
    let updatedStudents = students.filter(
      (student) => student.name !== bc.name
    );
    setStudents(updatedStudents);
    let updatedBots = binaryBots.filter((student) => student.name !== bc.name);
    setBinaryBots(updatedBots);
  };

  const moveToBots = (student) => {
    let bb = {
      name: student.name,
      img: student.img,
    };
    setBinaryBots([...binaryBots, bb]);
    let updatedStudents = students.filter(
      (student) => student.name !== bb.name
    );
    setStudents(updatedStudents);
    let updatedBc = bcCrew.filter((student) => student.name !== bb.name);
    setBcCrew(updatedBc);
  };

  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button className="button-24" onClick={() => window.location.reload()}>
        Reset
      </button>
      <div className="App">
        <MainContainer
          students={students}
          bcCrew={bcCrew}
          binaryBots={binaryBots}
          moveToBc={moveToBc}
          moveToBots={moveToBots}
        />
      </div>
    </div>
  );
}

export default App;
