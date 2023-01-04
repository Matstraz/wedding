import MyTimer from "./MyTimer";
import foto1 from "../../../assets/pics/foto1.png";
import foto2 from "../../../assets/pics/foto2.png";
import Navbar from "./Navbar";

export default function BrideGroom() {
  const time = new Date("June 15, 2024 15:30:00");

  return (
    <div className="min-h-screen bg-slate-100 text-slate-70 italic" id="main">
      <Navbar />
      <div
        className="flex justify-center items-center py-20 md:gap-16 gap-8"
        id="newlyweds"
      >
        <div className="flex flex-col justify-center items-center gap-5 pl-5">
          <img src={foto1} width={325} alt="foto sposo" />
          <p>Matteo S.</p>
        </div>
        <p className="text-4xl sm:text-6xl lg:text-8xl chopin">&</p>
        <div className="flex flex-col justify-center items-center gap-5 pr-5">
          <img src={foto2} width={325} alt="foto sposa" />
          <p>Alessandra L.</p>
        </div>
      </div>
      <div className="text-center chopin text-5xl">Lorem, ipsum dolor. </div>
      <div className="text-center text-base py-5 pb-28">
        15 Giugno, 2024 - Palermo
      </div>
      <div className="flex justify-center items-center bg-slate-200 text-lg md:text-3xl">
        <MyTimer expiryTimestamp={time} />
      </div>
    </div>
  );
}
