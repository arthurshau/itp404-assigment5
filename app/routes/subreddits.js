import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
  	let subreddit = params.subreddit;
 		return $.getJSON(`https://www.reddit.com/r/${subreddit}.json`);   	
	},
	actions: {
    loading(transition, originRoute) {
      $('#title').html('Loading...')
      transition.promise.finally(function() {
     	  $('#title').html('Subreddit Search')     
      });
    },
    error(error, transition) {
      if (error) {
        $('#title').html('Error');
      }
    }
  }

});
