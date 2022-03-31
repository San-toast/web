import React from "react";
import Student from "./Student";

export default function BcCrew({
  bcCrew,
  binaryBots,
  moveToBc,
  moveToBots,
  students,
}) {
  return (
    <div className="bc-crew">
      <h1>BC Crew</h1>
      {bcCrew?.map((student) => (
        <Student
          students={students}
          key={student.name}
          student={student}
          bcCrew={bcCrew}
          binaryBots={binaryBots}
          moveToBots={moveToBots}
          moveToBc={moveToBc}
        />
      ))}
    </div>
  );
}
