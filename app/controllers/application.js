import Ember from 'ember';
import EmberCPM from 'ember-cpm';

export default Ember.Controller.extend({
  something: 'abc',
  computedValue: EmberCPM.Macros.ifNull('name', 'Anonymous')
});
