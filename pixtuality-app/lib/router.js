Router.configure({
	layoutTemplate: 'globalLayout'
});

Router.route('/', function() {
	this.render('menuMain');
});

Router.route('/room/:_id', function() {
	var item = Rooms.findOne(this.params._id);
	this.render('roomMain', {data: room});
});