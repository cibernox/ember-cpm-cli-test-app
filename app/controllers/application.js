import Ember from 'ember';
import ifNull from 'ember-cpm/if-null';

export default Ember.Controller.extend({
  something: 'abc',
  computedValue: ifNull('name', 'Anonymous')
});
