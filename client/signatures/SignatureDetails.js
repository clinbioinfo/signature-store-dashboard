Template.SignatureDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('signatures');
		self.subscribe('params');
		self.subscribe('studies');
		self.subscribe('entities');
	});

	Session.set('newAnnotation', false);
	Session.set('newDescription', false);
	Session.set('newComment', false);
});

Template.SignatureDetails.helpers({
	signature: () => {

		var id = FlowRouter.getParam('id');
		// alert(id);

		var currentSignature = Signatures.findOne({'_id' : id});

		Session.set('currentSignature', currentSignature);
		// console.log("basename of current signature is " + currentSignature.basename);


		const signature_id = currentSignature['signature_id'];

		let param_list = Params.find({'signature_id' : signature_id});

		if (param_list !== undefined){

			if (param_list.length > 0 ){

				currentSignature['param_list'] = param_list
			}
		}


		let entity_list = Params.find({'signature_id' : signature_id});

		if (entity_list !== undefined){

			if (entity_list.length > 0 ){

				currentSignature['entity_list'] = entity_list;
			}
		}


		return currentSignature;
	}
});

Template.SignatureDetails.events({
	'click #newAnnotationButton'(event){

		event.preventDefault();

		/* Open the New Annotation form */
		Session.set('newAnnotation', true);

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newComment', false);

	},
	'click #newDescriptionButton'(event){

		event.preventDefault();

		/* Open the New Description form */
		Session.set('newDescription', true);	

		/* Close the other forms */
		Session.set('newAnnotation', false);
		Session.set('newComment', false);
	},
	'click #newCommentButton'(event, template){

		event.preventDefault();

		/* Open the New Comment form */
		Session.set('newComment', true);	

		/* Close the other forms */
		Session.set('newDescription', false);
		Session.set('newAnnotation', false);

	}
});