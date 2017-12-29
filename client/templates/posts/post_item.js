Template.postItem.helpers({
	domain : function(){
		var a = window.document.createElement('a');
		a.href = this.url;

		return a.hostname;
	}
});