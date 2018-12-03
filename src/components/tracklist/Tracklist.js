import React, { Component, Fragment } from "react";
import Track from "../track/Track";

import "./Tracklist.css";

export default class Tracklist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="total-tracks">
          {this.props.tracklist.length} results
        </div>
        <ul className="list-group">
          <li className="list-group-item list-title">
            <div className="row align-items-center">
              <div className="col-1" />
              <div className="col">Song</div>
              <div className="col">Album</div>
              <div className="col">Artists</div>
              <div className="col" />
            </div>
          </li>
          {this.props.tracklist.map(track => (
            <Track key={track.id} track={track} />
          ))}
        </ul>
      </Fragment>
    );
  }
}


