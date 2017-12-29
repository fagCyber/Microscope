
if (Posts.find().count() === 0){
	Posts.insert({
		title: 'Introducing Telescrope',
		url  : 'http://sachagreif.com/introducing-telescope/'
	});
	Posts.insert({
		title: 'Meteor turtorail',
		url  : 'http://meteor.com'
	});
	Posts.insert({
		title: 'Meteor book',
		url  : 'http://pdfdrive.net'
	});
}