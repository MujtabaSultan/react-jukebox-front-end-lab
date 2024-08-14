const tracksDetails = (props) => {
  //console.log(currentTrack);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleClick = (evt) => {
    switch (evt.target.name) {
      case "play":
        break;
      case "edit":
        break;
      case "delete":
        break;

      default:
        break;
    }
  };
  const handleRemove = (trackId) => {
props.remove(trackId)

  };

  const handleEdit = (trackId) => {
    props.change(props.currentTrack)
    
      };
  return (
    <>
      <p>
        {props.currentTrack.title} by : <b>{props.currentTrack.artist}</b>
      </p>
      <form action="" onSubmit={handleSubmit}>
        <button type="submit" onClick={()=>{

          props.setPlaying(props.currentTrack)
        }} name="play">
          play
        </button>
        <button type="submit" name="edit" onClick={()=>{handleEdit(props.currentTrack._id)}} >
          edit
        </button>
        <button type="submit" name="delete" onClick={()=>{handleRemove(props.currentTrack._id)}}>
          delete
        </button>
      </form>
    </>
  );
};

export default tracksDetails;
