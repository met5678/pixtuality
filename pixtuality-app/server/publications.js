Meteor.publish('rooms', function() {
	return Rooms.find();
});

Meteor.publish('roomDetail', function(id) {
	return Rooms.find(id);
})