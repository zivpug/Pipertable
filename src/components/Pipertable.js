import React from "react";

// Import headers component
import Tableheader from './Tableheader';
// Import external CSS
import './pipertable.css';


/**
 * Main component - holds the textarea and the action button (just for the sample.)
 *
 * @returns Pipertable element
 *
 * */
export default class Pipertable extends React.Component {

	// Basic settings:

	// Set cell names - change array data to your table headers
	headers = ['first name', 'last_name', 'address', 'cell_4', 'dog_name'];
	// Set the separator character
	separator = '|';
	// Set the separator character to be used in regex. Helps if needs to be escaped like with a Pipe
	separatorregex = "\\|";


	placeholder = this.headers.join(this.separator);

	// Init component's state
	state = {
		value: '',
		prepped: '',
		lines: 0,
		cell: 0,
		cellname: ''
	};

	/** Get cursor location from textarea
	 * and calc the cell number by this location
	 * @param {Object} e - the event from the textarea
	 * @returns Cell index {NUmber}
	 */
	getCell = function (e) {
		// Get cursor position using the 'selectionStart' property
		let pos = e.target.selectionStart;
		// Get full text
		let text = e.target.value;
		// Find start of the current row
		let start = text.lastIndexOf('\n', pos) + 1;
		// Get the relevant part of the selected row
		let linepart = text.substr(start, pos - start);
		// Find how many cells (pipes) are in the relevant part of the selected row
		let regstr = new RegExp(this.separatorregex, "g");
		return (linepart.match(regstr) || []).length;

	};

	/** If arrow keys used - trigger check (using their keycodes)
	 * @param {Object} e - the event from the textarea
	 * */
	checkKeys = (e) => {
		let keyCodes = [37, 38, 39, 40];
		if (keyCodes.indexOf(e.keyCode) > -1) {
			this.handleChange(e);
		}
	};

	/**
	 * Brake the text into an array of lines and cells*
	 * @param {string} text - the value from the textarea
	 * @returns text as an {Array} (with rows as sub arrays and cells as objects)
	 */
	splitlines = (text) => {
		// Split text into rows (array) by line brakes
		let rows = text.split("\n");
		// Split the rows array into cells by pipes
		rows.forEach((line, index) => {
			// Split each line and create array of objects with keys from the Header array
			rows[index] = line.split(this.separator).map((item, i) => {
				return {[this.headers[i]]: item}
			});
		});
		return rows;
	};

	/**
	 * Calculate the table data
	 * Sends the textarea value into the splitting functions
	 * then keep the table data and it's meta data in the component's state
	 * @param {Object} e - the  passed event
	 */
	handleChange = (e) => {
		e.preventDefault();
		let text = e.target.value;
		let prepped = this.splitlines(text);
		// Calc and save the number of lines
		let lines = prepped.length;
		// Calc and save the current cell (to pass to the Headers component)
		let cell = this.getCell(e);
		this.setState(
			{
				value: e.target.value,
				prepped,
				lines,
				cell,
				cellname: this.headers[cell]
			});

		// Call the callback function from the parent controller.
		if (this.props.action) {
			this.props.action(prepped);
		}
	};

	render() {
		return (
			<form>
				{/* Table headers component*/}
				<Tableheader
					headers={this.headers}
					cell={this.state.cell}
					lines={this.state.lines}/>
				{/* Textarea - main part of this controller */}
				<textarea
					className={'pipertext'}
					placeholder={this.placeholder}
					id="pipertable"
					name="pipertable"
					value={this.state.value}
					onKeyUp={this.checkKeys}
					onChange={this.handleChange}
					onClick={this.handleChange}></textarea>
			</form>

		);
	}
};
