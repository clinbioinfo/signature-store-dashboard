Template.ParamsDashboard.onCreated(function (){

	var self = this;
	
	self.autorun(function(){
		self.subscribe('params');		
	});

	Session.set('currentParam', null);
});

Template.ParamsDashboard.helpers({
	params: () => {
		
		const projection = {
			'_id': 1, 
			'name': 1, 
			'signature_id': 1, 
			'val' : 1
		};

		return Params.find({}, projection);
	},
  	paramCount() {
    	return Params.find().count();
  	},
});

Template.ParamsDashboard.events({
	'click .new-param': function (){
		Session.set('newParam', true);
	}
});
