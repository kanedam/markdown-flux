var AppDispatcher = require('../dispatcher/AppDispatcher');
var MarkdownConstants = require('../constants/MarkdownConstants');

module.exports = {
	updateText: function (text) {
		AppDispatcher.dispatch({
			actionType: MarkdownConstants.MARKDOWN_UPDATE,
			text: text
		});
	} 
};
