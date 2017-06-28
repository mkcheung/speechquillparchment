import React from 'react';
import ReactDOM from 'react-dom';
import Speech from './Speech';
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
			console.log(responseJson.speeches);
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
			<ul>
				{
					Object
					.keys(this.state.speeches)
					.map(key => <Speech key={key} index={key} details={this.state.speeches[key]}/>)
				}
			</ul>
		)
	}
}

export default ListOfSpeeches;