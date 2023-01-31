import MyTimer from "./MyTimer";

export default function WhenWhere() {
  const time = new Date("July 05, 2024 15:30:00");

  return (
    <div className="min-h-screen bg-slate-100 text-slate-70 pt-20" id="where">
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
                Sabato 16/06/2024 - 15.00 PM - Chiesa ...., Via.. Palermo
              </p>
              <div className="flex gap-5">
                <button className="bg-slate-200 p-2 px-4">Info</button>
                <button className="bg-slate-200 p-2 px-4">
                  Indicazioni stradali
                </button>
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
                Sabato 16/06/2024 - 19.00 PM - Chiesa ...., Via.. Palermo
              </p>
              <div className="flex gap-5">
                <button className="bg-slate-200 p-2 px-4">Info</button>
                <button className="bg-slate-200 p-2 px-4">
                  Indicazioni stradali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-slate-200 text-lg md:text-3xl mt-16">
        <MyTimer expiryTimestamp={time} />
      </div>
    </div>
  );
}
