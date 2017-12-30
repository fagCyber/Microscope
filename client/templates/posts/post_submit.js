
Template.postSubmit.events({
	'submit form': function(e){
		e.preventDefault();

		var post = {
			url : $(e.target).find(['name=url']).value();
			title: $(e.target).find(['name=title']).value();
		}

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}
});