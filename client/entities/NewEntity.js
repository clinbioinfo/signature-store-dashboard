Template.NewEntity.events({
	'click .fa-close': function (){
		Session.set('newEntity', false);
	}
});