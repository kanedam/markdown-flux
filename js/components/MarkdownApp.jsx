var React = require('react');
var MarkdownInput = require('./MarkdownInput.jsx');
var MarkdownItem = require('./MarkdownItem.jsx');

module.exports = React.createClass({
	render: function () {
		return (
			<div id="editor">
				<MarkdownInput text="# Hello" />
				<MarkdownItem />
			</div>
		);
	}
});
