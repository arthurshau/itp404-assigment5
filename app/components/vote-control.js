import Component from '@ember/component';

export default Component.extend({
	//these booleans prevent the user from upvoting/downvoting more than once
	upvoted: false,
	downvoted: false,
	actions: {
		increment() {
			if (!this.get('upvoted')) {
				let newScore = this.get('score') + 1
				this.get('onvote')(newScore)		
				this.set('upvoted', true)
				this.set('downvoted', false)
			}
		},

		decrement() {
			if (!this.get('downvoted')) {
				let newScore = this.get('score') - 1
				this.get('onvote')(newScore)		
				this.set('upvoted', false)
				this.set('downvoted', true)
			}
		}
	}
});
