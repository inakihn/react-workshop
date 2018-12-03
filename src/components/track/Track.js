import React, { Fragment } from "react";

import "./Track.css";

const Track = ({ track = {} }) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-1">*</div>
        <div className="col">{track.name}</div>
        <div className="col">{track.album.name}</div>
        <div className="col">
          {track.artists.map(artist => (
            <Fragment key={artist.id}>
              {artist.name} <br />
            </Fragment>
          ))}
        </div>
        <div className="col">
          <img alt="album" src={track.album.images[2].url} />
        </div>
      </div>
    </li>
  );
};

export default Track;