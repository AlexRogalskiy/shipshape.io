import Route from '@ember/routing/route';
import { htmlSafe } from '@ember/string';

export default Route.extend({
  model() {
    return {
      metaTags: {
        title: 'Ember.js Consulting and Training - Ship Shape',
        description: 'Ember consulting is our specialty at Ship Shape. We have worked on several ambitious, ' +
          'full scale Ember apps for both large and small clients. We put a huge focus on leveling up your team\'s ' +
          'Ember skills, while also churning out bulletproof features for your Ember app.',
        type: 'website',
        url: 'https://shipshape.io/ember-consulting/'
      }
    };
  }
});
