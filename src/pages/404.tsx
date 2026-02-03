import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ErrorPage() {
  return (
    <section className="w-screen flex flex-col justify-between h-screen">
      <Header />

      <div className="w-full flex justify-center my-32 flex-col items-center">
        <p className="text-white text-3xl font-bold">404 - Page non trouvée</p>
        <p>
          et c'est ok, tu peux revenir sur la home page{" "}
          <Link className="underline!" to="/">
            ici
          </Link>
        </p>
      </div>
      <Footer />
    </section>
  );
}
