<<<<<<< HEAD
import React from "react";

class SearchBar extends React.Component {
  state = { input: "" };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.input);
    console.log(this.state.input);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search By Country</label>
            <input
              placeholder="Enter Country"
              type="text"
              value={this.state.input}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
=======
import React from "react";

class SearchBar extends React.Component {
  state = { input: "" };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onCapitalSubmit(this.state.input);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search By Capital of the Country</label>
            <input
              placeholder="Enter Capital"
              type="text"
              value={this.state.input}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
>>>>>>> 8f512860f5b9ff646565fd88c10419a109a716ab
