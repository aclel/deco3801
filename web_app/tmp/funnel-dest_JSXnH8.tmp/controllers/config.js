import Ember from 'ember';

export default Ember.Controller.extend({

	//Action for all the buttons on the config page
	actions: {
		editSensor: function(a) {
			// console.log(a);
			a.set('edit', true)
		},
		saveSensor: function(a) {
			// console.log(a);
			a.set('edit', false)
		},
		pingBuoy: function(a) {
			// console.log(a);
			var buoy = a.get("ID");
			//SEMESTER 2 TEAM, you'll need to edit the URL to where you choose to run the server
			var url = "http://syrah.timhadwen.com:33332/command?buoy_id=" + buoy + "&command=PINGBUOY"
			
			a.set('loading', true)

			$.ajax({
				url: url
			}).done(function(error) {
			 	a.set('loading', false);
			 	a.set('pinged', true);
			})
		} 
		//SEMESTER 2 TEAM, add all over button actions here
		// for example: editPollRate(), savePollRate() etc...
	}
});
