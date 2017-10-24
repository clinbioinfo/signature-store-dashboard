Template.ParamDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('params');
	});

	Session.set('newAnnotation', false);
	Session.set('newDescription', false);
	Session.set('newComment', false);
});

Template.ParamDetails.helpers({
	param: () => {

		var id = FlowRouter.getParam('id');

		var currentParam = Params.findOne({'_id' : id});

		Session.set('currentParam', currentParam);

		return currentParam;
	}
});

Template.ParamDetails.events({
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