import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultContainer from "./DefaultContainer";
import Home from "./components/home/Home";
import Veershaiva from "./components/veerashaiva/Veerashaiva";
import About from "./components/about/About";
import Leaders from "./components/leaders/Leaders";
import Events from "./components/Events/Events";
import EventDetailsPage from "./components/Events/EventDetailsPage";
import Form from "./components/form/Form";
import Contact from "./components/contact/Contact";
import Report from "./components/contact/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/veerashaiva" element={<Veershaiva />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
