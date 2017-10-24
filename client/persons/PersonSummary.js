Template.PersonSummary.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.PersonSummary.helpers({
	updatePersonSummaryId: function(){
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
})

Template.PersonSummary.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	// 'click .fa-trash': function (){
	// 	Meteor.call('deletePersonsummary', this._id);
	// },
	'click .fa-pencil': function (event, template){
		template.editMode.set(!template.editMode.get());
		// Session.set('editMode', !Session.get('editMode'));
	}
});
