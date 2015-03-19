Template.menuCreateRoom.events({
	'click': function() {
		Meteor.call('room_create');
	}
});