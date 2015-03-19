// If there are no participants
if (Participants.find().count() == 0) {

  Participants.insert({
    "_id": "14017878692",
    "alias": "Raino",
    "avatar": "http://lorempixel.com/200/200/sports/1/"
  });

  Participants.insert({
    "_id": "12024948427",
    "alias": "Tilda",
    "avatar": "http://lorempixel.com/200/200/sports/2/"
  });

  Participants.insert({
    "_id": "12077200001",
    "alias": "Fruitloop",
    "avatar": "http://lorempixel.com/200/200/sports/3/"
  });

}


// Participants.insert({
//   "_id": "12077200002",
//   "alias": "Fruitloop Imposter",
//   "avatar": "http://lorempixel.com/200/200/sports/3/"
// });

// {
//   "_id": phone number,
//   "alias": name,
//   "avatar": picture url,
//   "geo": {
//     city:
//     state:
//     zip:
//   },
//   "status": ...,
//   "score": number
// }
