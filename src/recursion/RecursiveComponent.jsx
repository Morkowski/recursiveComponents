import React, { Component } from 'react';

export default class RecursiveComponent extends Component {


	//write recursive method here
	renderChildren(components) {
		const componentsArray = components;
		return componentsArray;
	}


	render() {
		const {components} = this.props;
		return (
		  <div>
				<br/>
				{this.renderChildren(components)}
		  </div>
		);
	}


};
