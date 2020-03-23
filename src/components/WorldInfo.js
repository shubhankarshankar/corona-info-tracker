import React from "react";
import coronavirustracker from "../apis/coronavirus-tracker";

class WorldInfo extends React.Component {
  state = {
    infected: 0,
    dead: 0,
    cured: 0
  };

  showLatest = async () => {
    const Response = await coronavirustracker.get("/latest");

    this.setState({
      infected: Response.data.latest.confirmed,
      dead: Response.data.latest.deaths,
      cured: Response.data.latest.recovered
    });
  };

  componentDidMount = () => {
    this.showLatest();
  };

  render() {
    if (!this.state.dead) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="ui container">
          <h2>Globally:</h2>
          <div className="ui segment">
            <h3 className="header" style={{ color: "orange" }}>
              Infected:
            </h3>
            {this.state.infected}
          </div>
          <div className="ui segment">
            <h3 className="header" style={{ color: "red" }}>
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
      );
    }
  }
}

export default WorldInfo;
