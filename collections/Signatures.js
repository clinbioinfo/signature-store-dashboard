// import SimpleSchema from 'simple-schema';

Signatures = new Mongo.Collection('signature');
Studies    = new Mongo.Collection('study');
Params     = new Mongo.Collection('param');
Entities   = new Mongo.Collection('entity');
Persons    = new Mongo.Collection('person');

Signatures.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc, fieldNames, modified){
		return !!userId;
	}
});

Studies.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc, fieldNames, modified){
		return !!userId;
	}
});

Entities.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc, fieldNames, modified){
		return !!userId;
	}
});

Params.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc, fieldNames, modified){
		return !!userId;
	}
});


Persons.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc, fieldNames, modified){
		return !!userId;
	}
});


PersonsSchema = new SimpleSchema({
	first_name : {
		type : String,
		label : 'First Name'
	},
	last_name : {
		type : String,
		label : 'Last Name',
		optional : true
	},
	email : {
		type : String,
		label : 'Email',
		optional: true
	}
});

Persons.attachSchema( PersonsSchema );

EntitiesSchema = new SimpleSchema({
	pval : {
		type : String,
		label : 'Pval'
	},
	name : {
		type : String,
		label : 'Name',
		optional : true
	},
	signature_id : {
		type : String,
		label : 'Signature ID',
		optional: true
	},
	fc : {
		type : String,
		label : 'FC',
		optional: true
	}
});


Entities.attachSchema( EntitiesSchema );

ParamsSchema = new SimpleSchema({
	val : {
		type : String,
		label : 'Val'
	},
	name : {
		type : String,
		label : 'Name',
		optional : true
	},
	signature_id : {
		type : String,
		label : 'Signature ID',
		optional: true
	}
});

Params.attachSchema( ParamsSchema );

CommentsSchema = new SimpleSchema({
	text : {
		type : String,
		label : 'Comment'
	},
	username : {
		type : String,
		label : 'Username',
		optional : true
	},
	date : {
		type : Date,
		label : 'Date'
	},
	owner : {
		type : String,
		label : 'Owner ID',
		optional: true
	}, 
	email : {
		type : String,
		label : 'Email',
		optional: true
	}
});

AnnotationsSchema = new SimpleSchema({
	key : {
		type : String,
		label : 'Key'
	},
	value : {
		type : String,
		label : 'Value'
	},
	username : {
		type : String,
		label : 'Username',
		optional: true
	},
	email : {
		type : String,
		label : 'Email',
		optional: true
	},
	date : {
		type : Date,
		label : 'Date'
	},
	owner : {
		type : String,
		label : 'Owner ID',
		optional: true
	} 
});

SignaturesSchema = new SimpleSchema({
	name: {
		type : String,
		label : 'Name'
	},
	entity_list: {
		type : [Number],
		label : 'Entity List'
	},
	desc: {
		type : String,
		label : 'Description',
		optional: true
	},
	source:{
		type: String,
		optional: true
	},
	entity_type:{
		type: String,
		optional: true
	},
	date_first_modified:{
		type: String,
		optional: true
	},
	date_created:{
		type: String,
		optional: true
	},
	comments : {
		type : [CommentsSchema]
	},
	annotations : {
		type : [AnnotationsSchema]
	}
});


StudiesSchema = new SimpleSchema({
	name: {
		type : String,
		label : 'Name'
	},
	desc: {
		type : String,
		label : 'Description',
		optional: true
	},
	objectives:{
		type: String,
		optional: true
	},
	person:{
		type: PersonsSchema,
		optional: true
	},
	comments : {
		type : [CommentsSchema]
	},
	annotations : {
		type : [AnnotationsSchema]
	}
});

// Meteor.methods({
// 	toggleMenuItem: function(id, currentState){
// 		Signatures.update(id, {
// 			$set: {
// 				inMenu: !currentState
// 			}
// 		});
// 	},
// 	deleteRecipe: function (id){
// 		Signatures.remove(id);
// 	}
// });

Signatures.attachSchema( SignaturesSchema );