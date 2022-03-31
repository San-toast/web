import React from "react";
import Student from "./Student";

export default function DefaultTeam({
  students,
  bcCrew,
  binaryBots,
  moveToBc,
  moveToBots,
}) {
  return (
    <div className="defaultteam">
      <h1>Default</h1>

      {students?.map((student) => (
        <Student
          key={student.name}
          students={students}
          student={student}
          bcCrew={bcCrew}
          binaryBots={binaryBots}
          moveToBc={moveToBc}
          moveToBots={moveToBots}
        />
      ))}
    </div>
  );
}
