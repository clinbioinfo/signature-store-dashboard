Template.NewPerson.events({
	'click .fa-close': function (){
		Session.set('newPerson', false);
	}
});