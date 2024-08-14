import { useState, useEffect } from "react";

const trackForm = (props) => {
 // console.log(props.trackId);
  const tracko = props.trackId;
  const initial = {
    artist: "",
    title: "",
  };
  const [formData, setFormData] = useState(tracko || initial);
  const [artist, setartist] = useState("");
  const [title, settitle] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!tracko) {
      //console.log("this data here boi", formData);
      props.createTrack(formData);
      setFormData(initial);
    }
    else{
      props.updatingBoi(formData,tracko._id);
      setFormData(initial);

    }
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //-----------------------
  useEffect(() => {
    tracko ? setFormData(tracko) : setFormData(initial);
   // console.log(tracko);
  }, [tracko]);

  //----------------------
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">artist:</label>
        <input
          type="text"
          name="artist"
          onChange={handleChange}
          value={formData.artist}
        />

        <label htmlFor="title">title:</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <button type="submit">{tracko?"update the track":"add the track"}</button>
      </form>
    </>
  );
};
export default trackForm;
