import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App " >
      <Header />
      <div  id="detail" className="my-24 px-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
