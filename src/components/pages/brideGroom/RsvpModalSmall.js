import { useState } from "react";
import waLogo from "../../../assets/pics/waLogo.svg";

export default function RsvpModalSmall({ closeBurger }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        RSVP
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 cursor-default px-2">
            <div className=" my-10 mx-auto max-w-3xl bg-myBlue-bgDark p-3">
              {/*content*/}
              <div className="rounded-lg max-w-3xl bg-myBlue-bgLight w-68 md:w-96 p-3 text-center relative italic">
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="rounded-full hover:bg-slate-300 font-bold absolute -top-1 -right-1 text-xl bg-myBlue-main px-2 py-0 "
                  onClick={() => {
                    setShowModal(false);
                    closeBurger(false);
                  }}
                >
                  X
                </button>
                <p>
                  Per confermare la vostra partecipazione contattateci ai nostri
                  recapiti telefonici
                </p>
                <div className="pt-5 flex flex-row justify-center items-center gap-7">
                  <p>
                    Alessandra
                    <a
                      href="https://wa.me/3476076565"
                      className="flex flex-row justify-center items-center gap-1"
                    >
                      <p>3476076565</p>
                      <img src={waLogo} width={20} alt="Whatsapp logo" />
                    </a>
                  </p>

                  <p>
                    Matteo
                    <a
                      href="https://wa.me/3423878435"
                      className="flex flex-row justify-center items-center gap-1"
                    >
                      <p>3423878435</p>
                      <img src={waLogo} width={20} alt="Whatsapp logo" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
