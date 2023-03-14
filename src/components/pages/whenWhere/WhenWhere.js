import MyTimer from "./MyTimer";

export default function WhenWhere() {
  const time = new Date("July 05, 2024 15:30:00");

  return (
    <div
      className="min-h-screen bg-myBlue-bgLight text-slate-70 pt-20"
      id="where"
    >
      <div className="text-center chopin text-6xl italic">Dove e Quando</div>
      <div className="flex justify-center pt-16">
        <div className="flex gap-7 w-full justify-center flex-col lg:flex-row items-center">
          <div className="lg:w-4/12 md:w-9/12 w-11/12">
            <div className="bg-church h-64"></div>
            <div className="flex flex-col justify-center items-center gap-5 pt-5 bg-white p-12">
              <p className="italic">WEDDING CERIMONY</p>
              <p className=" text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                dolor officiis facilis quaerat sed eius, nesciunt eligendi
                voluptate harum enim placeat cum hic ad similique distinctio
                quo, ut sit sapiente? Cupiditate aliquam non doloribus earum.
              </p>
              <p className="italic">
                Venerdì 5/07/2024 - 15.30 PM - Chiesa di Santa Maria della
                Pietà, Piazzetta della Pietà SNC, 90133 Palermo
              </p>
              <div className="flex gap-5">
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="https://it.wikipedia.org/wiki/Chiesa_di_Santa_Maria_della_Piet%C3%A0_(Palermo)"
                >
                  Info
                </a>
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="https://www.google.it/maps/dir//Chiesa+Santa+Maria+Della+Piet%C3%A0,+Piazzetta+della+Piet%C3%A0,+Palermo,+PA/@38.1174972,13.3716383,202m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x1319e52ede184e8b:0x58413da94c6faeb6!2m2!1d13.3721157!2d38.1169877!3e0"
                >
                  Indicazioni stradali
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-9/12 w-11/12">
            <div className="bg-party h-64"></div>
            <div className="flex flex-col justify-center items-center gap-5 pt-5 bg-white p-12">
              <p className="italic">WEDDING PARTY</p>
              <p className=" text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                dolor officiis facilis quaerat sed eius, nesciunt eligendi
                voluptate harum enim placeat cum hic ad similique distinctio
                quo, ut sit sapiente? Cupiditate aliquam non doloribus earum.
              </p>
              <p className="italic">
                Venerdi 05/07/2024 - 19.30 PM - Castello di San Nicola L'Arena,
                San Nicola l'Arena, Palermo
              </p>
              <div className="flex gap-5">
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="http://www.castellodisannicola.it/"
                >
                  Info
                </a>
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="https://www.google.it/maps/dir//Castello+San+Nicola,+l'Arena,+San+Nicola+l'Arena+PA/@38.0155572,13.6137298,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1317575d277f63b1:0xe4f4db2eebe2264e!2m2!1d13.6158976!2d38.0155676!3e0"
                >
                  Indicazioni stradali
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-myBlue-bgDark text-lg md:text-3xl mt-16">
        <MyTimer expiryTimestamp={time} />
      </div>
    </div>
  );
}
