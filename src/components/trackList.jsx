import TracksDetails from "./trackDetails";
import NowPlaying from "./nowPlaying";
import { useState } from "react";
const tracksList = (props) => {
  //console.log(props.tracksList)
const [playing,setPlaying]=useState({})
  return (
    <>
      <h1>Track list</h1>

      {props.tracksList.map((track) => {
        return (
          <div>
            <TracksDetails currentTrack={track} remove={props.remove} change={props.change} setPlaying={setPlaying} />
          </div>
        );
      })}

      <NowPlaying playing={playing}/>
    </>
  );
};

export default tracksList;
