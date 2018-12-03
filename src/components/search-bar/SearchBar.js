import React from "react";
import "./SearchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTimes, faSpotify);

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", buttonDisabled: true };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });

    if (event.target.value === "") {
      this.setState({ buttonDisabled: true });
    } else {
      this.setState({ buttonDisabled: false });
    }
  }

  handleClear(event) {
    this.setState({ inputValue: "", buttonDisabled: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <form noValidate onSubmit={this.handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-12">
              <label className="control-label">
                Search for your favorite music:
              </label>
            </div>
            <div className="input-group col-10 mb-2">
              <input
                type="text"
                className="form-control"
                id="search-term"
                name="search-term"
                placeholder="Search artist, song, album ..."
                value={this.state.inputValue}
                onChange={this.handleChange}
              />
              <span
                className={`input-group-text ${
                  this.state.buttonDisabled ? "hidden" : ""
                }`}
                onClick={this.handleSubmit}
              >
                <FontAwesomeIcon icon="times" className="fa-sm" />
              </span>
            </div>
            <div className="col-2">
              <button
                type="submit"
                className="btn btn-search mb-2 btn-block"
                disabled={this.state.buttonDisabled}
              >
                Search <FontAwesomeIcon icon={faSpotify} className="fa-sm" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
