import '../api/methods.js';

Meteor.publish('signatures', function (){
	return Signatures.find({});
});

Meteor.publish('studies', function (){
	return Studies.find({});
});

Meteor.publish('entities', function (){
	return Entities.find({});
});

Meteor.publish('params', function (){
	return Params.find({});
});

Meteor.publish('persons', function (){
	return Persons.find({});
});