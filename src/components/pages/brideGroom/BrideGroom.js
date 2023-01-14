import foto1 from "../../../assets/pics/foto1.png";
import foto2 from "../../../assets/pics/foto2.png";

export default function BrideGroom() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-70 italic" id="main">
      <div>
        <p className="text-center pt-20 chopin text-6xl" id="newlyweds">
          Gli Sposi
        </p>
        <div className="flex justify-center items-center py-20 md:gap-16 gap-8">
          <div className="flex flex-col justify-center items-center gap-5 pl-5">
            <img src={foto1} width={325} alt="foto sposo" />
            <p>Matteo S.</p>
          </div>
          <p className="text-4xl sm:text-6xl lg:text-6xl chopin">&</p>
          <div className="flex flex-col justify-center items-center gap-5 pr-5">
            <img src={foto2} width={325} alt="foto sposa" />
            <p>Alessandra L.</p>
          </div>
        </div>
      </div>
      <div className="text-center chopin text-5xl">Lorem, ipsum dolor. </div>
      <div className="text-center text-base py-5 pb-28">
        15 Giugno, 2024 - Palermo
      </div>
    </div>
  );
}
