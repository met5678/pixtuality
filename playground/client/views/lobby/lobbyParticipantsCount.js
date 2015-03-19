Template.lobbyParticipantsCount.helpers({
  'curPlayers': function() {
    return Participants.find().count();
  },

  'maxPlayers': function() {
    return 32;
  }
});
