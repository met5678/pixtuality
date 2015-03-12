Template.menuExistingRooms.helpers({
	'rooms': function() {
		return Rooms.find();
	}
});