var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MarkdownConstants = require('../constants/MarkdownConstants');
var assign = require('object-assign');
var marked = require('marked');

var CHANGE_EVENT = 'change';

var _markedText = '';

function _updateMarkedText (text) {
	if (text) {
		_markedText = marked(text);
	} else {
		_markedText = '';
	}
}

var MarkdownStore = assign({}, EventEmitter.prototype, {
	getMarkedText: function () {
		return _markedText;
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function (action) {
	switch (action.actionType) {

		case MarkdownConstants.MARKDOWN_UPDATE:
			_updateMarkedText(action.text);
			MarkdownStore.emitChange();
			break;

		default:

	}
});

module.exports = MarkdownStore;
