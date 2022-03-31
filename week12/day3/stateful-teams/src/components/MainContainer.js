import BcCrew from "./BcCrew";
import BinaryBots from "./BinaryBots";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({
  students,
  bcCrew,
  binaryBots,
  moveToBc,
  moveToBots,
}) {
  return (
    <>
      <BcCrew
        students={students}
        bcCrew={bcCrew}
        binaryBots={binaryBots}
        moveToBots={moveToBots}
        moveToBc={moveToBc}
      />
      <DefaultTeam
        students={students}
        bcCrew={bcCrew}
        binaryBots={binaryBots}
        moveToBc={moveToBc}
        moveToBots={moveToBots}
      />
      <BinaryBots
        students={students}
        bcCrew={bcCrew}
        binaryBots={binaryBots}
        moveToBots={moveToBots}
        moveToBc={moveToBc}
      />
    </>
  );
}
