import React from "react";

export default function Student({
  students,
  student,
  bcCrew,
  bots,
  moveToBc,
  moveToBots,
}) {
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        {students.includes(student) ? (
          <>
            <button onClick={() => moveToBots(student)} className="button-24">
              Binary Bots
            </button>
            <button onClick={() => moveToBc(student)} className="button-24">
              BC Crew
            </button>
          </>
        ) : bcCrew.includes(student) ? (
          <button onClick={() => moveToBots(student)} className="button-24">
            Binary Bots
          </button>
        ) : (
          <button onClick={() => moveToBc(student)} className="button-24">
            BC Crew
          </button>
        )}
      </div>
    </div>
  );
}
