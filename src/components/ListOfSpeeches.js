import React from 'react';
import ReactDOM from 'react-dom';
import Speech from './Speech';
import video from './prototype.mp4';
import 'whatwg-fetch';

class ListOfSpeeches extends React.Component{
	constructor(){
		super();
		this.state={
			speeches:[]
		};
	}

	componentWillMount(){
		var url = 'http://localhost:8000/speeches';

		return fetch(url, {
		  method: 'GET',
		  headers: {
		    'Authorization': this.props.authToken,
		    'Content-Type': 'application/json'
		  }
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			this.setState({
				speeches:responseJson.speeches
			});
      	})
		.catch((error) => {
			console.log(error);
			console.error(error);
		});
	}

	render(){
		return(
			<div>
				{
					Object
					.keys(this.state.speeches)
					.map(key => <Speech key={key} index={key} details={this.state.speeches[key]}/>)
				}
			</div>
		)
	}
}

export default ListOfSpeeches;