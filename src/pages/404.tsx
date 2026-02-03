import Header from "../components/Header";

export default function ErrorPage() {
  return <section className="w-full flex flex-col h-56 justify-between">
          <Header />
      <div className="w-full flex justify-center">
        <p className="text-white text-3xl">404 - Page non trouvée</p>
      </div>
  </section>;
}