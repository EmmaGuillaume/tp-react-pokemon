import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="fixed top-0 left-0 z-50 w-screen bg-neutral-800 py-4 px-8 shadow-md flex justify-between">
      <Link to="/">
        <img className="w-32" src="/pokemon.png" alt="" />
      </Link>
    </section>
  );
}
export default Header;
