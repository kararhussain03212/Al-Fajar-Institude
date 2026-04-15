// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Introduction from "./Pages/About/Introduction";
import Chairman from "./Pages/About/Chairman";
import Director from "./Pages/About/Director";
import Vision from "./Pages/About/Vision";
import Academic from "./Pages/Academic/Academic";
import English from "./Pages/Academic/English";
import Mathematics from "./Pages/Academic/Mathematics";
import Hons from "./Pages/Academic/Hons";
import Computerscience from "./Pages/Academic/Computerscience";
import Faculty from "./Pages/Academic/Faculty";
import ShortCourse from "./Pages/Academic/ShortCourse";
import Highlight from "./Pages/Highlight/Highlight";
import Job from "./Pages/Job/Job";
import Media from "./Pages/Media/Media";
import Album from "./Pages/Media/Album";
import Video from "./Pages/Media/Video";
import Clipping from "./Pages/Media/Clipping";
import Notification from "./Pages/Media/Notification";
import Vital from "./Pages/Media/Vital";
import Conference from "./Pages/Conference";
import Contactus from "./Pages/Contactus";
import Downloads from "./Pages/Downloads";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all public pages with MainLayout */}
        <Route element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/chairman" element={<Chairman />} />
          <Route path="/about/director" element={<Director />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic/english" element={<English />} />
          <Route path="/academic/mathematics" element={<Mathematics />} />
          <Route path="/academic/hons" element={<Hons />} />
          <Route
            path="/academic/computerscience"
            element={<Computerscience />}
          />
          <Route path="/academic/faculty" element={<Faculty />} />
          <Route path="/academic/shortcourse" element={<ShortCourse />} />
          <Route path="/highlight" element={<Highlight />} />
          <Route path="/job" element={<Job />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/album" element={<Album />} />
          <Route path="/media/videos" element={<Video />} />
          <Route path="/media/clipping" element={<Clipping />} />
          <Route path="/media/notification" element={<Notification />} />
          <Route path="/media/vital" element={<Vital />} />
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
