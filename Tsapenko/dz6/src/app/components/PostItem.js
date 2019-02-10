import React from 'react';
import {Link} from 'react-router';

export default class PostItem extends React.Component {
	render() {
		return (
			<div>
				<div className="card border-secondary mb-3">
					<div className="card-header">
						<Link to={`/user/${this.props.Id}`}>
							{this.props.title}
						</Link>
					</div>
				  	<div className="card-body text-secondary">
							<div>{this.props.body}</div>  
				  	</div>
				</div>
			</div>
		);
	}
}