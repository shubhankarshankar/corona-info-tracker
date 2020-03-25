import React from "react";
import coronavirustracker from "../apis/coronavirus-tracker";
import geoNames from "../apis/geoNames";

class CountryInfo extends React.Component {
  state = {
    infected: null,
    dead: null,
    recovered: null,
    countryCode: ""
  };

  componentDidMount() {
    this.getLocationCode();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props);
    // console.log(nextProps);
    // console.log(this.state);
    // console.log(nextState);
    if (
      nextProps.lat !== this.props.lat ||
      nextState.infected !== this.state.infected ||
      nextState.countryCode !== this.state.countryCode
    ) {
      //console.log("component will update");
      return true;
    } else {
      //console.log("component will not update");
      return false;
    }
  }

  componentDidUpdate() {
    this.getLatestInfo();
  }

  getLocationCode = async () => {
    const location = await geoNames.get("/countryCodeJSON", {
      params: {
        lat: this.props.lat,
        lng: this.props.lng,
        username: "shubhankarshankar"
      }
    });

    this.setState({
      countryCode: location.data.countryCode
    });
  };

  getLatestInfo = async countryCode => {
    const Response = await coronavirustracker.get("/locations", {
      params: {
        country_code: this.state.countryCode
      }
    });

    this.setState({
      infected: Response.data.latest.confirmed,
      dead: Response.data.latest.deaths,
      recovered: Response.data.latest.recovered
    });
  };

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderInfo = latestInfo => {
    return (
      <div>
        <div className="ui segment">
          <h3 className="ui header" style={{ color: "orange" }}>
            Infected:
          </h3>
          {this.state.infected}
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
          {this.state.recovered}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.infected == null ? this.renderLoading() : this.renderInfo()}
      </div>
    );
  }
}

export default CountryInfo;
