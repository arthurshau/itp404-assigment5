import Component from '@ember/component';

export default Component.extend({
	actions: {
	  changeScore(value) {
	  	/* I'm using jquery to manually set the HTML where the score is displayed, 
	  		rather than updating post.data.score. */
      this.$('h4').html("Score: " + value)
    }
  }
});
