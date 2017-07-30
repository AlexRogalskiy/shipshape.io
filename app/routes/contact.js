import { get, setProperties } from '@ember/object';
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
    return setProperties(get(this, 'headData'), {
      title: 'Contact - Ship Shape',
      description: 'To get started on your Ember training or Ember consulting project, '
      + 'shoot us an email or fill out the contact form.',
      type: 'website',
      url: 'https://shipshape.io/contact'
    });
  },

  actions: {
    sendContactRequest(model) {
      if (get(model, 'validations.isValid')) {
        return model.save()
          .then(this._successMessage.bind(this))
          .catch(this._errorMessage.bind(this));
      }
    }
  },

  _errorMessage() {
    get(this, 'flashMessages').success('Thanks for contacting us! We\'ll be in touch shortly.');
  },

  _successMessage() {
    get(this, 'flashMessages').danger('Something went wrong :(. Please refresh and try again.');
  }
});
