// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import WhoWeAre from "./Pages/About/WhoWeAre";
import Academic from "./Pages/Academic/Academic";
import Job from "./Pages/Job/Job";
import JobDetails from "./Pages/Job/JobDetails";
import CampusNews from "./Pages/CampusNews";
import Admissions from "./Pages/Admissions";
import News from "./Pages/News/News";
import NewsDetailPage from "./Pages/News/NewsDetailPage";
import Events from "./Pages/Events/Events";
import EventDetailPage from "./Pages/Events/EventDetailPage";
import Conference from "./Pages/Conference";
import Contactus from "./Pages/Contactus";
import Downloads from "./Pages/Downloads";
import NotFound from "./Pages/NotFound/NotFound";
import CampusLifePage from "./Pages/Academic/CampusLife";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all public pages with MainLayout */}
        <Route element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/campus-news" element={<CampusNews />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/upcoming-events" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/downloads" element={<Downloads />} />
        </Route>

        {/* Catch all - 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
