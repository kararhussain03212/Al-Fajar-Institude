// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import WhoWeAre from "./Pages/About/WhoWeAre";
import Academic from "./Pages/Academic/Academic";
import Faculty from "./Pages/Academic/Faculty";
import ComputerScience from "./Pages/Academic/ComputerScience";
import English from "./Pages/Academic/English";
import Mathematics from "./Pages/Academic/Mathematics";
import ShortCourse from "./Pages/Academic/ShortCourse";
import BAHons from "./Pages/Academic/BAHons";
import Job from "./Pages/Job/Job";
import JobDetails from "./Pages/Job/JobDetails";
import CampusNews from "./Pages/CampusNews";
import Admissions from "./Pages/Admissions";
import AdmissionDetail from "./Pages/Admission/AdmissionDetail";
import News from "./Pages/News/News";
import NewsDetailPage from "./Pages/News/NewsDetailPage";
import Announcements from "./Pages/Announcements/Announcements";
import AnnouncmentsDetails from "./Pages/Announcements/AnnouncmentsDetails";
import Events from "./Pages/Events/Events";
import EventDetailPage from "./Pages/Events/EventDetailPage";
import Conference from "./Pages/Conference";
import Contactus from "./Pages/Contactus";
import Downloads from "./Pages/Downloads";
import NotFound from "./Pages/NotFound/NotFound";
import CampusLifePage from "./Pages/Campus/CampusLife";

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
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/academic" element={<Academic />} />
          <Route
            path="/academic/computer-science"
            element={<ComputerScience />}
          />
          <Route path="/academic/english" element={<English />} />
          <Route path="/academic/mathematics" element={<Mathematics />} />
          <Route path="/academic/shortcourse" element={<ShortCourse />} />
          <Route path="/academic/hons" element={<BAHons />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/campus-news" element={<CampusNews />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/upcoming-events" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/detail" element={<AdmissionDetail />} />
          <Route
            path="/admissions/undergraduate"
            element={<AdmissionDetail />}
          />
          <Route path="/admissions/graduate" element={<AdmissionDetail />} />
          <Route
            path="/admissions/professional"
            element={<AdmissionDetail />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcements/:id" element={<AnnouncmentsDetails />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/contact" element={<Contactus />} />
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

