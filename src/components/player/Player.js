import React, { Component, Fragment } from "react";
import SearchBar from "../search-bar/SearchBar";
import Tracklist from "../tracklist/Tracklist";



class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracklist: [] };
  }

  handleSubmit = inputValue => 
    fetch(
      `https://api.spotify.com/v1/search?q=${inputValue}&type=track&limit=10`,
      {
        crossDoman: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization:
            "Bearer BQBVcLdzXS1YBgCJhBq02CYf3JPkw9k-6CHsWm3PtZp1rPzdenE4u09_GVFDyHTti_9u5Lvd0AkvDE4UlQ9i3q3RKHFh34_RbRk9qyIiH0VR1Yjg-WqfrM08ALIHIgLz8dGmOg_utBIs"
        }
      }
    )
      .then(response => response.json())
      .then(myJson => {
        console.log(JSON.stringify(myJson));
        this.setState({ tracklist: myJson.tracks.items });
      });
  ;

  render() {
    return (
      <React.Fragment>
        <SearchBar onSearch={this.handleSubmit} />
        <Tracklist tracklist={this.state.tracklist} />
      </React.Fragment>
    );
  }
}

export default Player;
