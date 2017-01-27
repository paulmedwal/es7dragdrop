import React, { PropTypes, Component } from 'react';

export default class AddButton extends Component {
  render() {
    var currentState = this.props.components;
    var stateString = JSON.stringify(currentState);

		return (
			<div>
				<button onClick={() => this.props.addComponent("Form")}>Hello</button>
				<span>{stateString}</span>
			</div>
		);
	}
}