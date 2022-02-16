import React from "react";
import { connect } from "react-redux";

export const SongDetail = ({ song }: any) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  console.log(song);
  return (
    <div>
      <h3>Details for</h3>
      <p>Title: {song.title}</p>
      <p>Duration {song.duration}</p>
      {song.title}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
