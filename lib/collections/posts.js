
Posts = new Mongo.Collection('posts');

Posts.allow({
	update : function(userId, post) {return ownsDocument(userId, post);},
	remove : function(userId, post) {return ownsDocument(userId, post);}
});

Meteor.methods({
	postInsert: function(postAttributes){
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			url: String
		});

		if(Meteor.isServer){
			postAttributes.title += "(Server)";
			
			Meteor._sleepForMs(5000);
		}	else {
			postAttributes.title += "(client)";
		}

		var postWithSameLink = Posts.findOne({url: postAttributes.url});
		if(postWithSameLink){
			return {
				postExists : true,
				_id : postAttributes._id
			}
		}

		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId : user._id,
			author : user.name,
			submitted : new Date()
		});

		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	}
});
