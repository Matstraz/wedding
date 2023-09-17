import Castle from "./Castle";
import Church from "./Church";
import MyTimer from "./MyTimer";

export default function WhenWhere() {
  const time = new Date("July 05, 2024 15:30:00");

  return (
    <div
      className="min-h-screen bg-myBlue-bgLight text-slate-70 pt-20"
      id="church"
    >
      <Church />
      <Castle />
      <div className="flex justify-center items-center bg-myBlue-bgDark text-lg md:text-3xl mt-16 border-t-2 border-b-2 border-myBlue-main">
        <MyTimer expiryTimestamp={time} />
      </div>
    </div>
  );
}
