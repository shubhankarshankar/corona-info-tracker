import React from "react";
import SearchBar from "./SearchBar";
import WorldInfo from "./WorldInfo";
import Guidelines from "./Guidelines";
import covid19 from "../apis/covid-19";

class App extends React.Component {
  state = {
    err: "",
    country: "",
    confirmed: null,
    active: null,
    cured: null,
    dead: null
  };

  onSearchSubmit = country => {
    covid19
      .get("/statistics", {
        params: {
          country
        }
      })
      .then(resp => {
        this.setState({
          confirmed: resp.data.response[0].cases.total,
          active: resp.data.response[0].cases.active,
          cured: resp.data.response[0].cases.recovered,
          country: resp.data.response[0].country,
          dead: resp.data.response[0].deaths.total
        });
      })
      .catch(err => {
        this.setState({
          err:
            "Couldn't Find Country. Try UK for united kingdom, USA for america or UAE for united arab emirates"
        });
      });
  };

  renderSearch() {
    return (
      <div>
        <h3 className="ui huge header">Country: {this.state.country}</h3>
        <div>
          <div className="ui segment">
            <h3 className="ui header" style={{ color: "orange" }}>
              Confirmed Cases:
            </h3>
            {this.state.confirmed}
          </div>
          <div className="ui segment">
            <h3 className="ui header">Active Cases:</h3>
            {this.state.active}
          </div>
          <div className="ui segment">
            <h3 className="ui header" style={{ color: "red" }}>
              Dead:
            </h3>
            {this.state.dead}
          </div>
          <div className="ui segment">
            <h3 className="header" style={{ color: "green" }}>
              Cured:
            </h3>
            {this.state.cured}
          </div>
        </div>
        <div className="ui section divider"></div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.state.country === "" ? <div></div> : this.renderSearch()}
        <WorldInfo />
        <Guidelines />
      </div>
    );
  }
}

export default App;
