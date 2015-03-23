Template.menuRoom.events({
	'click': function() {
		Router.go('room', {_id: this._id});
	}
});