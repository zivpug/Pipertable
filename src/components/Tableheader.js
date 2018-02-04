import React from "react";

// import CSS file
import './headers.css';

/**
 * Heqaders controller for the Pipertable component
 * Renders and update the headers based on user selection
 *
 * @param {Array}  headers - an array of header names (param from the Pipertable component)
 * @param {string} cell - index of the selected cell (param from the Pipertable component)
 * @returns Pipertable element
 *
 * */
export default class Tableheader extends React.Component {

	render() {
		let cell = this.props.cell;
		// Create the headers LI list by iterating through the headers array
		// @returns {Array} with headers as <LI> objects
		let headers = this.props.headers.map(function (header, index) {
			return (
				<li key={index}
				    className={(index === cell) ? 'selectedHeader' : ''}
				>{header}</li>
			);
		});

		return (
				<h4>
					<ul className={'headerbox'}>
						{headers}
					</ul>

					{/* Alert the user if there are more cells then headers */}
					{this.props.cell > this.props.headers.length-1 &&
						<div className='error'>Too many cells</div> }
				</h4>
		);
	}
};
