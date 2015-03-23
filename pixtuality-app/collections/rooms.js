Rooms = new Meteor.Collection('rooms');

Meteor.methods({
	'room_create': function() {
		var room = {
			mode: 'lobby',
			players: [],
			maxPlayers: 32,
			phoneNumber:'571-989-4785',

		};

		return Rooms.insert(room);
	}
});

//console.log(ig);
/*
{
	_id:
	phoneNumber:
	mode: 'lobby',
	participants:
	maxParticipants:
}
*/