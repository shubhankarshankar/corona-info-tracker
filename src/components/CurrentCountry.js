import React from "react";
import CountryInfo from "./CountryInfo";

class CurrentCountry extends React.Component {
  state = {
    lat: null,
    lng: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message }) //Handling errors
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h3>Error: {this.state.errorMessage}</h3>
          <br />
          <br />
        </div>
      );
    } else if (!this.state.errorMessage && this.state.lat) {
      return <CountryInfo lng={this.state.lng} lat={this.state.lat} />;
    }

    return <div>Loading...</div>;
  }

  render() {
    return (
      <div>
        <h2>According to your Location:</h2>
        {this.renderContent()}
      </div>
    );
  }
}

export default CurrentCountry;
