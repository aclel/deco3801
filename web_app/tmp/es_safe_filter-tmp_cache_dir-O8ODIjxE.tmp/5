import Ember from 'ember';

export default Ember.Controller.extend({
	
	// This function returns a filtered model based on the filtering criteria
	// This function observes elements of the filtering bar
	// SEMESTER 2 - the graph and map should be passed this as their model
	// SEMESTER 2 - add filtering criteria here
	filteredModel: function() {
		var model = this.get('model');
		var activated = this.get('buoyActivated');
		// debugger;

		if (model != null && activated != null) {
			var array = []
			model.forEach(function(m) {
				activated.forEach(function(a) {
					// if (m.buoy == a.get('name') 
					// 	&& a.get('activated') == true 
					// 	&& m.timestamp == this.get('sliceDateTime')) {
					if (m.buoy == a.get('name') && a.get('activated') == true) {
						array.push(m)
					}
				}, this)
			}, this)
			return array

		} else {
			return model
		}

	}.property("model", "buoyActivated.@each.activated", "sliceDateTime"),	

	//Time Fitering
	timeFilterToggle: ["Slice", "Range"],
	sliceDate: moment().format("L"),
	sliceTime: moment().format("hh:mm"),
	sliceDateTime: null,
	sliceDateTimeObserve: function(){
		var sDate = this.get('sliceDate');
		var sTime = this.get('sliceTime');
		var sDateTime = sDate+" "+sTime
		var unix = Math.round(new Date("2013/09/05 15:34:00").getTime()/1000);
		
		this.set("sliceDateTime", unix);
	}.observes("sliceTime", "sliceDate").on('init'),
	
	//Buoy Filtering
	buoyActivated: [],
	//gets Ember Object of buoys and whether they are active or not
	buoyActivedObserve: function(){
		var activated = [];
		var a = this.get("buoyList");
		if (a != null) {
			a.forEach(function(a, i) {
				var t = Ember.Object.create();
				var e = false			// var e = this.get("buoyActivated."+a);

				t.set('name', a);
				if (e) {
					t.set('activated', e.activated);
				} else {
					t.set('activated', true);
				};

				activated.push(t);
			}) 
		};

		this.set("buoyActivated", activated);
	}.observes('buoyList').on('init'),
	
	//This function returns an of buoys, watching the model
	buoyList: function() {
		var model = this.get('model');
		var buoyrecord = Ember.Object.create();
		var buoylist = [];

		// console.log(model);
		if (model != null) {
			model.forEach(function(a, i) {
				if (!buoyrecord.get("buoy"+a.buoy)) {
					buoylist.push(a.buoy)
					buoyrecord.set("buoy"+a.buoy, true)
					// console.log(a)
				// console.log(i, a)
				}
			})
		}
		return buoylist;
	}.property("model")
});
