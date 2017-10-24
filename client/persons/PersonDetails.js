Template.PersonDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('persons');
	});

	Session.set('newAnnotation', false);
	Session.set('newDescription', false);
	Session.set('newComment', false);
});

Template.PersonDetails.helpers({
	person: () => {

		var id = FlowRouter.getPerson('id');

		var currentPerson = Persons.findOne({'_id' : id});

		Session.set('currentPerson', currentPerson);

		return currentPerson;
	}
});

Template.PersonDetails.events({
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