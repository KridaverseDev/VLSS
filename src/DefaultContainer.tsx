import { Outlet } from "react-router-dom";
import Footer from "./components/header&footer/Footer";
import Header from "./components/header&footer/Header";

function DefaultContainer() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DefaultContainer;
