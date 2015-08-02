import Ember from 'ember';
import layout from '../templates/components/graphs-view';


//SEMESTER 2, your graph component should behave as below
//All these functions will be accessible to the component views
// We have already called this component for you in the index.hbs
export default Ember.Component.extend({
  initialise: function() {
  	this.setupGraphs();
  }.on("didinsertelement"),

  howmanythings: [1, 2, 3],

  setupGraphs: function() {
  	//setup data
  },
  
  updateGraphs: function() {

  }.observes("model", "howmanythings.@each")
});
