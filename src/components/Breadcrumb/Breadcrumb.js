import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Breadcrumb extends Component {
	render() {
		const { history } = this.props;

		return (
			<div className="breadcrumb">
				{history.map((item, index) => {
					return (
						<React.Fragment key={index}>
							{item.isActive ? (
								<div className="breadcrumb--object">{item.title}</div>
							) : (
								<a href={item.path} className="breadcrumb--object breadcrumb--link">
									{item.title}
								</a>
							)}
							<div className="breadcrumb--divider">/</div>
						</React.Fragment>
					);
				})}
			</div>
		);
	}
}

Breadcrumb.propTypes = {
	history: PropTypes.array
};

export default Breadcrumb;
