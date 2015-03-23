Router.configure({
	layoutTemplate: 'globalLayout'
});

Router.route('/', {
	name: 'menu',
	template: 'menuMain',
	waitOn: function() {
		return Meteor.subscribe('rooms');
	}
});

Router.route('/room/:_id',{
	name: 'room',
	template: 'lobbyMain',
	waitOn: function() {
		return Meteor.subscribe('roomDetail',this.params._id);
	},
	data: function() {
		return Rooms.findOne(this.params._id);
	}
});
