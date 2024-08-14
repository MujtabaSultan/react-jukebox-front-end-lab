const nowPlaying = (props) => {
  return (
    <>
      <p>artist : {props.playing.artist}</p>
      <p>title : {props.playing.title}</p>
    </>
  );
};

export default nowPlaying;
