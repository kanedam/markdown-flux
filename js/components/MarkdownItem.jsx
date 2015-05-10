var React = require('react');
var MarkdownStore = require('../stores/MarkdownStore');

module.exports = React.createClass({
	getInitialState: function () {
		return {markedText: MarkdownStore.getMarkedText()};
	},

	componentDidMount: function () {
		MarkdownStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		MarkdownStore.removeChangeListener(this._onChange);
	},

	render: function () {
		return (
			<div dangerouslySetInnerHTML={{__html: this.state.markedText}} />
		);
	},

	_onChange: function () {
		this.setState({
			markedText: MarkdownStore.getMarkedText()
		});
	}

});
