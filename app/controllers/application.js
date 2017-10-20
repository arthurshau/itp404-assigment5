import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchForSubreddit() {
      let subreddit = this.get('subreddit');

      this.transitionToRoute('subreddits', subreddit);
    }
  }
});
