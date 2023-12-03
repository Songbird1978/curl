import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Video from './components/video/video';
import Home from './pages/home/home';
import Under from './pages/under/under';
import VideosMap from './pages/videosMap/videosMap'
import Biography from './pages/biography/biography';
import Discography from './pages/discography/discography';
import Shows from './pages/shows/shows';
import Articles from './pages/articles/articles';
import Anderson from './pages/articles/anderson';
import GalleryMain from './pages/gallery/galleryMain';
import LiveGallery from './pages/gallery/liveGallery';
import PressGallery from './pages/gallery/pressGallery';
import StudioGallery from './pages/gallery/studioGallery';
import ChillGallery from './pages/gallery/behindTheScenes';
import './App.css';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>

      <Video />
      <Navbar />

      <AnimatePresence

        initial={false}
        mode='wait'
        onExitComplete={() => null}>

        <div className="App">

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/under" element={<Under />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/videosMap" element={<VideosMap />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/anderson" element={<Anderson />} />
            <Route path="/galleryMain" element={<GalleryMain />} />
            <Route path="/liveGallery" element={<LiveGallery />} />
            <Route path="/pressGallery" element={<PressGallery />} />
            <Route path="/studioGallery" element={<StudioGallery />} />
            <Route path="/behindTheScenes" element={<ChillGallery />} />
          </Routes>

        </div >

      </AnimatePresence >

    </>
  );
}

export default App;
