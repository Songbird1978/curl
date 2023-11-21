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
import Gallery from './pages/gallery/gallery';
import Curious from './pages/articles/curious';
import Biden from './pages/articles/biden';
import Brexit from './pages/articles/brexit';
import Digging from './pages/articles/digging';
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path=":id" element={<Curious />} />
            <Route path=":id" element={<Brexit />} />
            <Route path=":id" element={<Digging />} />
            <Route path=":id" element={<Biden />} />
          </Routes>

      

      </div >

      </AnimatePresence >

    </>
  );
}

export default App;
