Template.globalLayout.helpers({
	'getTransition': function() {
		return {
			method: SpringTransition,
			period: 800,
			dampingRatio: 0.2,
			velocity: 0.01
		};
	}
});

Template.globalLayout.rendered = function () {
	var fview = FView.byId('rootRC');

	if(fview) {
		console.log(fview);
		console.log(fview.inTransformFrom);
	}
};