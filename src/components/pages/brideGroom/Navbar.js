import logo from "../../../assets/pics/logos/Logo definitivo.png";
import RsvpModal from "./RsvpModal";

export default function Navbar() {
  return (
    <nav className="bg-white flex px-5 lg:px-0 justify-between lg:justify-center items-center gap-40 border-b-2 stickyBar z-20 p-1 text-base">
      <a href="#home">
        <img src={logo} alt="logo" width={50} />
      </a>
      <ul className="hidden lg:flex justify-center items-center gap-12 overflow-clip">
        <a href="#home">HOME</a>
        <a href="#newlyweds">GLI SPOSI</a>
        <a href="#witnesses">I TESTIMONI</a>
        <a href="#church">LA CHIESA</a>
        <a href="#castle">IL RICEVIEMNTO</a>
        <a href="#timeline">PROGRAMMA</a>
      </ul>

      {/*     <a
        href="#RSVP"
        className="p-2 px-3 bg-teal-300 rounded-3xl text-base hover:text-lg text-slate-100 hidden lg:block"
        onClick={rsvp}
      >
        RSVP
      </a> */}
      <RsvpModal />
      <p className="lg:hidden">burger</p>
    </nav>
  );
}
