Template.EntitiesDashboard.onCreated(function (){

	var self = this;
	
	self.autorun(function(){
		self.subscribe('entities');
	});

	Session.set('currentEntity', null);
});

Template.EntitiesDashboard.helpers({
	entities: () => {
		
		const projection = {
			'_id' : 1, 
			'pval': 1,
			'name': 1, 
			'fc': 1,
			'signature_id': 1
		};

		return Entities.find({}, projection);
	},
  	entityCount() {
    	return Entities.find().count();
  	},
});

Template.EntitiesDashboard.events({
	'click .new-entity': function (){
		Session.set('newEntity', true);
	}
});
