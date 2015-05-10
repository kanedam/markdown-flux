var React = require('react');
var MarkdownAction = require('../actions/MarkdownAction');

module.exports = React.createClass({
	propTypes: {
		text: React.PropTypes.string
	},

	getInitialState: function () {
		MarkdownAction.updateText(this.props.text);
		return {text: this.props.text};
	},

	componentDidMount: function () {
		MarkdownAction.updateText(this.state.text);
	},

	render: function () {
		return (
			<textarea
				value={this.state.text}
				onChange={this._onChange} />
		);
	},

	_onChange: function (event) {
		this.setState({text: event.target.value});
		MarkdownAction.updateText(event.target.value);
	}
});
