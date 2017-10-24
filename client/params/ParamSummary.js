Template.ParamSummary.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.ParamSummary.helpers({
	updateParamSummaryId: function(){
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
})

Template.ParamSummary.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	// 'click .fa-trash': function (){
	// 	Meteor.call('deleteParamsummary', this._id);
	// },
	'click .fa-pencil': function (event, template){
		template.editMode.set(!template.editMode.get());
		// Session.set('editMode', !Session.get('editMode'));
	}
});
