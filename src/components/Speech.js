import React from 'react';

class Speech extends React.Component{
	render(){
		const {details, index} = this.props;
		return(
			<li>
				<div id="theVideo">
					<video id="samp" width="640" height="480" controls src={details.videoUrl} type="video/mp4">
					</video>
				</div>
				{details.textOfSpeech}
			</li>
		);
	}
}
export default Speech;