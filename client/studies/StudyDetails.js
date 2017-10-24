Template.StudyDetails.onCreated(function (){

	var self = this;

	self.autorun(function(){

		self.subscribe('studies');
	});

	Session.set('newAnnotation', false);
	Session.set('newDescription', false);
	Session.set('newComment', false);
});

Template.StudyDetails.helpers({
	study: () => {

		var id = FlowRouter.getParam('id');
		// alert(id);

		var currentStudy = Studies.findOne({'_id' : id});

		Session.set('currentStudy', currentStudy);
		// console.log("basename of current signature is " + currentStudy.basename);

		return currentStudy;
	}
});

Template.StudyDetails.events({
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