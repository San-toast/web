import React from "react";
import Student from "./Student";

export default function BinaryBots({
  bcCrew,
  binaryBots,
  moveToBc,
  moveToBots,
  students,
}) {
  return (
    <div className="binarybots">
      <h1>Binary Bots</h1>
      {binaryBots?.map((student) => (
        <Student
          students={students}
          key={student.name}
          student={student}
          bcCrew={bcCrew}
          bots={binaryBots}
          moveToBots={moveToBots}
          moveToBc={moveToBc}
        />
      ))}
    </div>
  );
}
