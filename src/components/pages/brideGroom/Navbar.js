import logo from "../../../assets/pics/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white flex px-5 lg:px-0 justify-between lg:justify-center items-center gap-40 border-b-2 prova z-20 p-1 text-base">
      <a href="#home">
        <img src={logo} alt="logo" width={55} />
      </a>
      <ul className="hidden lg:flex justify-center items-center gap-12 overflow-clip">
        <a href="#home">HOME</a>
        <a href="#newlyweds">GLI SPOSI</a>
        <a href="#witnesses">I TESTIMONI</a>
        <a href="#where">DOVE/QUANDO</a>
        <a href="#timeline">PROGRAMMA</a>
      </ul>

      <a
        href="#RSVP"
        className="p-2 px-3 bg-teal-300 rounded-3xl text-base hover:text-lg text-slate-100 hidden lg:block"
      >
        RSVP
      </a>
      <p className="lg:hidden">burger</p>
    </nav>
  );
}
