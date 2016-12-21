FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main : 'home'});
    }
});

FlowRouter.route('/signin', {
    name: 'signin',
    action() {
        BlazeLayout.render('MainLayout', {main : 'signin'});
    }
});

FlowRouter.route('/signup', {
    name: 'signup',
    action() {
        BlazeLayout.render('MainLayout', {main : 'signup'});
    }
});