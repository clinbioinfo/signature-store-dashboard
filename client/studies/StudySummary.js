Template.StudySummary.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.StudySummary.helpers({
	updateStudySummaryId: function(){
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
})

Template.StudySummary.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	// 'click .fa-trash': function (){
	// 	Meteor.call('deleteSignaturesummary', this._id);
	// },
	'click .fa-pencil': function (event, template){
		template.editMode.set(!template.editMode.get());
		// Session.set('editMode', !Session.get('editMode'));
	}
});
