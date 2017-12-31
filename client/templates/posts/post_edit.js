
Template.postEdit.events({
	'submit form': function(e){
		e.preventDefault();

		var currentPosttId = this._id;

		var postProperties = {
			url : $(e.target).find('[name = url').val(),
			title : $(e.target).find('[name = title').val()
		};

		Posts.update(currentPosttId, {$set : postProperties}, function(err){
			if(err){
				// Display the error to the user
				window.alert(err.reason);
			} else {
				Router.go('postPage', {_id : currentPosttId});
			}
		});
	},

  'Click .delete': function(e){
		e.preventDefault();

		if(confirm('Delete this post?')){
			var currentPosttId = this._id;
			Posts.remove(currentPosttId);
			Router.go('postsList');
		}
	}
});