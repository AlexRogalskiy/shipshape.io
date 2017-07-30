import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),
  flashMessages: service(),
  headData: service(),
  model() {
    return this.store.createRecord('contact');
  },
  afterModel() {
    return this.get('headData').setProperties({
      title: 'Contact - Ship Shape',
      description: 'To get started on your Ember training or Ember consulting project, '
      + 'shoot us an email or fill out the contact form.',
      type: 'website',
      url: 'https://shipshape.io/contact'
    });
  },
  actions: {
    sendContactRequest(model) {
      if (model.get('validations.isValid')) {
        return model.save()
          .then(
            () => {
              this.get('flashMessages').success('Thanks for contacting us! We\'ll be in touch shortly.');
            },
            () => {
              this.get('flashMessages').danger('Something went wrong :(. Please refresh and try again.');
            }
          );
      }
    }
  }
});
