import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  reddit: service('reddit'),
	model(params) {
		return this.get('reddit').findAllForSubreddit(params.subreddit)
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
        $('#title').html('error');
      }
    }
  }

});
