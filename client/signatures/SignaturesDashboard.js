Template.SignaturesDashboard.onCreated(function (){

	var self = this;
	
	self.autorun(function(){
		self.subscribe('signatures');
		self.subscribe('studies');
		self.subscribe('entities');
		self.subscribe('params');
	});

	Session.set('currentSignature', null);
});

Template.SignaturesDashboard.helpers({
	signatures: () => {
		
		const projection = {
			'_id': 1, 
			'name': 1, 
			'desc': 1, 
			'entity_type' : 1, 
			'source' : 1, 
			'date_created': 1
		};

		return Signatures.find({}, projection);
	},
  	signatureCount() {
    	return Signatures.find().count();
  	},
});

Template.SignaturesDashboard.events({
	'click .new-signature': function (){
		Session.set('newSignature', true);
	}
});
