import Ember from 'ember';
import EmberCPM from 'ember-cli-ember-cpm/ember-cpm';

export default Ember.Controller.extend({
  something: 'abc',
  computedValue: EmberCPM.Macros.ifNull('name', 'Anonymous')
});
