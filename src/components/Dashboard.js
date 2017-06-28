import decode from 'jwt-decode';
import React from 'react';
import Login from './Login';
import Logout from './Logout';
import ListOfSpeeches from './ListOfSpeeches';
import { Route, Redirect, browserHistory }  from 'react-router';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

class Dashboard extends React.Component{

	constructor(props){
		super(props);
		this.state={
			channel:[],

		};
		this.logoutAndRedirect=this.logoutAndRedirect.bind(this);
	}

	componentWillMount(){
		if (!this.props.checkIfLoggedIn()){
			this.props.history.push('/');
		}
	}

	logoutAndRedirect(){
		this.props.logout();
		this.props.history.push('/');
	}

	render(){

        let logoutButton = <Logout logoutAndRedirect={this.logoutAndRedirect}/>;

		return (
			<div className="container-fluid">
				{logoutButton}
				<div className="row">
					<div className="col-12">
						<ListOfSpeeches
						 authToken={this.props.authToken}
						/>
					</div>
					<div className="col-12">
						Evaluations
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;