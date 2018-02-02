// Pipertable - Contextual textarea -  Sample


import React, {Component} from 'react';

// import main component for the Pipertable
import Pipertable from './components/Pipertable'

// import CSS file
import './App.css';

/**
 * Main App component. Wrapper for the Pipertable demo
 * */
class App extends Component {

	/**
	 * SAMPLE
	 * Handler for the parsed table data recived fromn the component
	 * @param {Object} data - the parsed JSON object from the Pipertable component
	 * */

	state = {
		data: ''
	};

	handleTableData(data) {
		this.setState({data: data});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h2 className="App-title">Pipertable - Contextual textarea</h2>
				</header>

				<div className='App-container'>
					<div className='App-left'>
						{/* <Pipertable />
					        * Our main component
					        * use 'action' attribute to pass the callback function for the returned JSON data
					      */}
						<Pipertable action={this.handleTableData.bind(this)}/>
					</div>

					{/*JSON output - JUST FOR SAMPLE */}
					<div className='App-right'>
						<div>
							<h3>JSON output</h3>
							<pre>{JSON.stringify(this.state.data, null,  '\t')}</pre>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
