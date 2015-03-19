// Router.route('/', function () {
//
//   this.render('Home', {
//     data: function () { return Items.findOne({_id: this.params._id}); }
//   });
//
// });

Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/lobby', {name: 'lobby'})
