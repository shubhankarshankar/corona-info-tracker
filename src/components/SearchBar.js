import React from "react";
import logo from "../img/logo 2.png";

class SearchBar extends React.Component {
	state = { input: "" };

	onInputChange = event => {
		this.setState({ input: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();

		this.state.input === ""
			? this.setState({ input: "" })
			: this.props.onSearchSubmit(this.state.input);
	};

	render() {
		return (
			<div className="ui segment search-wrapper">
				<img className="ui centered image" src={logo} alt="logo" />
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
