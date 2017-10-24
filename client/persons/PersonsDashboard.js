Template.PersonsDashboard.onCreated(function (){

	var self = this;
	
	self.autorun(function(){
		self.subscribe('persons');		
	});

	Session.set('currentPerson', null);
});

Template.PersonsDashboard.helpers({
	persons: () => {
		
		const projection = {
			'_id': 1, 
			'first_name': 1, 
			'last_name': 1, 
			'email' : 1
		};

		return Persons.find({}, projection);
	},
  	personCount() {
    	return Persons.find().count();
  	},
});

Template.PersonsDashboard.events({
	'click .new-person': function (){
		Session.set('newPerson', true);
	}
});
