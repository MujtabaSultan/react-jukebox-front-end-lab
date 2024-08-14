import { useEffect, useState } from "react";
import * as trackService from "./services/trackService";
import TracksList from "./components/trackList";
import TracksDetails from "./components/trackDetails";
import TrackForm from "./components/trackForm";
const App = () => {


  const [showForm, setShowForm] = useState(false);
  const [tracksList, setTracksList] = useState([]);
  const [selected, setSelected] = useState(null);
  //const [isFormOpen, setIsFormOpen] = useState(false)

  const create = async (formData) => {
    const newTrack = await trackService.create(formData);
    setTracksList([...tracksList, newTrack]);
  };

  const remove = async (trackId) => {
    const tracksAfterRemove = await trackService.remove(trackId);
    console.log(tracksAfterRemove);
    setTracksList(tracksAfterRemove);
  };

  const updatingBoi= async (trackId,trackoid) => {
    const updatedList = await trackService.change(trackId,trackoid);
    console.log(updatedList)
    setTracksList(updatedList);
  };

  const change = async (trackId) => {
    //const updatedList = await trackService.change(trackId);
    //console.log(updatedList)
    setShowForm(false);
    setSelected(trackId);
    //setTracksList(updatedList);
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await trackService.index();
        setTracksList(data);
      } catch (error) {
        //console.log(error)
      }
    };
    fetchTracks();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setSelected(null)
          setShowForm(!showForm);
        }}
      >
        {showForm ? "show add track" : "hide form"}
      </button>

      <TracksList tracksList={tracksList} remove={remove} change={change} />

      {showForm ? null:(
        selected ? (
          <TrackForm createTrack={create} trackId={selected} updatingBoi={updatingBoi} />
        ) : (
          <TrackForm createTrack={create} />
        )
      ) }

      {/* {showForm ? null : <TrackForm createTrack={create} />} */}
    </>
  );
};

export default App;
