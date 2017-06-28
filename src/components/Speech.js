import React from 'react';

class Speech extends React.Component{
	render(){
		const {details, index} = this.props;
		return(
			<li>
					<video id="samp" width="640" height="480" controls>
						<source src = {this.props.details.videoPath} type="video/mp4"/>
					</video>
			</li>
		);
	}
}
export default Speech;