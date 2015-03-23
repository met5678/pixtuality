Template.menuCreateRoom.events({
	'click': function() {
		Meteor.call('room_create', function(error, result) {
			if(error) {
				return alert(error.reason);
			}
			console.log(result);
			Router.go('room', {_id: result});
		});
	}
});