import MyTimer from "./MyTimer";

export default function BrideGroom() {
  const time = new Date("June 15, 2024 15:30:00");

  return (
    <div
      className="min-h-screen bg-slate-100 flex justify-center items-center text-4xl"
      id="main"
    >
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
