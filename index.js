// Figure out what's going on and improve

var performAction = function(action, opts) {
	var url = this.url() + '/' + action;

	var options = {
		url: url,
		type: 'POST'
	};

	_.extend(options, opts);

	return this.sync.call(this, null, this, options);
};

Backbone.Model = Backbone.Model.extend({
	initialize: function() {
		if (_.isArray(this.actions)) {
			_.each(this.actions, function(action) {
				this[action] = _.bind(performAction, this, action);
			}, this);
		}
	}
});
