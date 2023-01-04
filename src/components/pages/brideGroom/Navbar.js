import logo from "../../../assets/pics/logo.png";

export default function Navbar() {
  return (
    <nav className="flex px-5 lg:px-0 justify-between lg:justify-center items-center gap-48 border-b-2 sticky top-0 z-10 bg-inherit p-1 text-lg md:text-2xl">
      <a href="#home">
        <img src={logo} alt="logo" width={55} />
      </a>
      <ul className="hidden lg:flex justify-center items-center gap-12">
        <a href="#home">Home</a>
        <a href="#newlyweds">Gli Sposi</a>
        <a href="#where">Dove/Quando</a>
        <a href="#gallery">Gallery</a>
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
