if (Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('signatures-dashboard');	
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');	
	});
}


FlowRouter.triggers.enter([function(context, redirect){
	if (! Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name : 'home',
	action(){
		if (Meteor.userId()){
			FlowRouter.go('signatures-dashboard');
		}
		//GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/signatures-dashboard', {
	name : 'signatures-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"SignaturesDashboard"});
	}
});

FlowRouter.route('/signature/:id', {
	name : 'signature-details',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"SignatureDetails"});
	}
});

FlowRouter.route('/studies-dashboard', {
	name : 'studies-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"StudiesDashboard"});
	}
});

FlowRouter.route('/study/:id', {
	name : 'study-details',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"StudyDetails"});
	}
});

FlowRouter.route('/entities-dashboard', {
	name : 'entities-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"EntitiesDashboard"});
	}
});

FlowRouter.route('/entity/:id', {
	name : 'entity-details',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"EntityDetails"});
	}
});

FlowRouter.route('/params-dashboard', {
	name : 'params-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"ParamsDashboard"});
	}
});

FlowRouter.route('/param/:id', {
	name : 'param-details',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"ParamDetails"});
	}
});

FlowRouter.route('/persons-dashboard', {
	name : 'persons-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"PersonsDashboard"});
	}
});

FlowRouter.route('/person/:id', {
	name : 'person-details',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"PersonDetails"});
	}
});