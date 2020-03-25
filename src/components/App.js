import React from "react";
import SearchBar from "./SearchBar";
import WorldInfo from "./WorldInfo";
import CurrentCountry from "./CurrentCountry";
import Guidelines from "./Guidelines";
import getCountryId from "../apis/getCountryId";
import CountryInfo from "./CountryInfo";

class App extends React.Component {
  state = {
    countryName: "",
    lat: null,
    lng: null,
    alpha2code: ""
  };

  onCapitalSubmit = async capital => {
    const response = await getCountryId.get(`/capital/${capital}`);

    console.log(response);

    this.setState({
      countryName: response.data[0].name,
      lat: response.data[0].latlng[0],
      lng: response.data[0].latlng[1],
      alpha2code: response.data[0].alpha2Code
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onCapitalSubmit={this.onCapitalSubmit} />
        {this.state.lat === null ? (
          <div></div>
        ) : (
          <div>
            <h3 className="ui huge header">
              Country: {this.state.countryName}
            </h3>
            <CountryInfo lat={this.state.lat} lng={this.state.lng} />
            <div class="ui section divider"></div>
          </div>
        )}
        <CurrentCountry />
        <WorldInfo />
        <Guidelines />
      </div>
    );
  }
}

export default App;
