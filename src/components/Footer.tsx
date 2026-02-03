import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full px-8 bg-neutral-700 fixed-bottom left-0 bottom-0 py-4 flex justify-center">
      <Link to="/terms">Mentions légales</Link>
    </footer>
  );
}
export default Footer;
