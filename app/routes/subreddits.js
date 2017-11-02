import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import EmberObject, { computed } from '@ember/object';

export default Route.extend({
  reddit: service('reddit'),
	model(params) {
    /* created a new RedditList Ember Class that takes in an array and automatically sorts it using a
      computed property */
    let RedditList = EmberObject.extend({
      list: null,

      sortedList: computed('list', function() {
        let list = this.get('list')
        return list.sort(function(a,b) {
          return b.data.score - a.data.score
        })
      })
    })
    //findAllForSubreddit returns a Promise
		let temp = this.get('reddit').findAllForSubreddit(params.subreddit)
    /* .then() also returns a promise. Since you can return a Promise to the route model, I return this
      to the model after passing the data into a RedditList object to be sorted */
    return temp.then(function (data) {
      let sortedList = RedditList.create({list: data.data.children})
      return sortedList.get('sortedList')
    })
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
