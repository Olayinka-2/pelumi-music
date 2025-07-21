import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/LandingPage";
import MusicPage from "./pages/MusicPage";
import VideoPage from "./pages/VideoPage";



import NavBar from "./components/Layout";
import AboutPage from "./pages/AboutPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <HomePage />, 
      },
      {
        path: "music",
        element: <MusicPage />,
      },
      {
        path: "video",
        element: <VideoPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;