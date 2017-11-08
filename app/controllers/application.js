import Controller from '@ember/controller';

export default Controller.extend({
	email: null,
  actions: {
    searchForSubreddit() {
      let subreddit = this.get('subreddit');

      this.transitionToRoute('subreddits', subreddit);
    },
    markAsRead(email) {
      this.set('email', email)
      this.get('email').read = true;
      console.log(this.get('email').read) 
    }
  }
});
