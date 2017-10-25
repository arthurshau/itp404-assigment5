import Service from '@ember/service';

export default Service.extend({
	findAllForSubreddit(subreddit) {
		return $.getJSON('https://api.reddit.com/r/' + subreddit)
	}
});
