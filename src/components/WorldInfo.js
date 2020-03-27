import React from "react";
import coronavirustracker from "../apis/coronavirus-tracker";

class WorldInfo extends React.Component {
  state = {
    infected: 0,
    dead: 0,
    cured: 0,
    err: ""
  };

  showLatest = () => {
    coronavirustracker
      .get("/latest")
      .then(Response => {
        this.setState({
          infected: Response.data.latest.confirmed,
          dead: Response.data.latest.deaths,
          cured: Response.data.latest.recovered
        });
      })
      .catch(err => {
        this.setState({
          err
        });
      });
  };

  componentDidMount = () => {
    this.showLatest();
  };

  render() {
    if (!this.state.infected) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="ui container">
          <h2 className="ui huge header">Globally:</h2>
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
          <div className="ui section divider"></div>
        </div>
      );
    }
  }
}

export default WorldInfo;
