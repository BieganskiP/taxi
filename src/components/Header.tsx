import Logo from "./Logo";
import Nav from "./Nav/Nav";

export default function Header() {
  return (
    <header className="max-w-5xl mx-auto p-3 md:p-4 flex justify-between items-center">
      <Logo />
      <Nav />
    </header>
  );
}
