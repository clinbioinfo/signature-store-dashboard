Template.EntityDetails.onCreated(function (){

	var self = this;

	self.autorun(function(){

		self.subscribe('entities');
	});

	Session.set('newAnnotation', false);
	Session.set('newDescription', false);
	Session.set('newComment', false);
});

Template.EntityDetails.helpers({
	entity: () => {

		var id = FlowRouter.getParam('id');
		// alert(id);

		var currentEntity = Entities.findOne({'_id' : id});

		Session.set('currentEntity', currentEntity);
		// console.log("basename of current signature is " + currentEntity.basename);

		return currentEntity;
	}
});

Template.EntityDetails.events({
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