import Route from '@ember/routing/route';

export default Ember.Route.extend({
  model() {
    let email = {
      read: false,
      title: 'Sign up for Spring classes!'
    }
    return email
  }
});