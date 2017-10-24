Template.StudiesDashboard.onCreated(function (){

	var self = this;
	
	self.autorun(function(){
		self.subscribe('studies');
	});

	Session.set('currentStudy', null);
});

Template.StudiesDashboard.helpers({
	studies: () => {
		
		const projection = {
			'_id' : 1, 
			'name': 1, 
			'desc': 1
		};

		return Studies.find({}, projection);
	},
  	studyCount() {
    	return Studies.find().count();
  	},
});

Template.StudiesDashboard.events({
	'click .new-study': function (){
		Session.set('newStudy', true);
	}
});
