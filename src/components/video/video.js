import React from "react";
import "./style.css";
import video from '../../assets/galaxyvideo.mp4';
//import Audio from '../audio';
import { Link } from "react-router-dom";


function Video() {
  return (
    <Link to="/">
      <video autoPlay muted loop playsInline >
        <source src={video} type="video/mp4" poster=""></source>
      </video>
    </Link>
  );
}

export default Video;

/*import YouTube from "react-youtube";



class Video extends React.Component {
   render() {
     const options = {
       height: '390',
       width: '2000',
       playerVars: {
         autoplay: 1,
         controls: 1,
       },
     };
 
     return <YouTube videoId="qn0gzJHURtk" className="video" options={options} onReady={this._onReady} id="video"/>;
   }
 
   _onReady(event) {
     event.target.pauseVideo();
   }
 }

 export default Video;

*/




