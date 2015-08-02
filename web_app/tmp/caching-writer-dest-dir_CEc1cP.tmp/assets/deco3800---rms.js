/* jshint ignore:start */

/* jshint ignore:end */

define('deco3800---rms/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'deco3800---rms/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('deco3800---rms/components/graphs-view', ['exports', 'ember', 'deco3800---rms/templates/components/graphs-view'], function (exports, Ember, layout) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
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

});
define('deco3800---rms/components/maps-view', ['exports', 'ember', 'deco3800---rms/templates/components/maps-view'], function (exports, Ember, layout) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		// Initialising the map
		initialise: function() {
			this.setupMap();
		}.on("didInsertElement"),

		map: null, //General pointer to the map object
		markers: [], //List of all of the markers

		// Defining map pin colours
		iconsForColors: {
			red: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
			green: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
			blue: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
			yellow: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
			orange: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
		},

		// Delegating map pin colours
		getIconForColor: function(colorString) {
			var colors = this.iconsForColors;

			switch(colorString) {
				case 'red':
					return colors.red;
				case 'blue':
					return colors.blue;
				case 'green':
					return colors.green;
				case 'yellow':
					return colors.yellow;
				default:
					return colors.orange;
			}
		},

		// Initialise the Google Map
		setupMap: function() {
			var map;
			var mapOptions = {
	          zoom: 11,
	          center: new google.maps.LatLng(-27.473704, 153.025818),
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };

	        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	        this.map = map; //Keep a global pointer to the map for later
	        //this.addClickListener();

	        this.updateReadings(); //Initial update of readings
		},

		// SEMESTER 2 - Implement the map pin pop-over here
		addClickListener: function() {
			var map = this.map;

			google.maps.event.addListener(map, 'click', function(event) {
	        	alert("Lat:" + event.latLng.lat() + " Lng:" + event.latLng.lng());
	        });
		},

		// Update map pins based on changes in model
		// This function observer the model, and will run each time the model updates
		updateReadings: function() {
			this.removeAllMarkers();

			//The model for the map is the filtered model provided by the filtering pane
			var model = this.get("model"); //Get the filtered model from the filter pane

			if (model != null) { //If it is not null, plot all of the pins
				for (var i = 0; i < model.length; i++) { //for each element in the filtered model
					this.addMarker(model[i]); //Add it to the map
				}
			}
		}.observes('model'),

		// Add a map pin to the map
		addMarker: function(reading) {
			var map = this.map; //Get a handle on the map

			var position = new google.maps.LatLng(reading.lat, reading.lng);
			var icon = this.getIconForColor(reading.color);
			var title = reading.sensorname + ": " + reading.reading;

	        var marker = new google.maps.Marker({
	          position: position,
	          map: map,
	          icon: icon,
	          title: title
	        });

	        this.markers.push(marker);
		},

		// Remove all map pins from the map
		removeAllMarkers: function() {
			var markers = this.markers;

			for (var i = 0; i < markers.length; i++) {
			    markers[i].setMap(null);
			}

			markers = []
		},



	});

});
define('deco3800---rms/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		actions: {

			// Styles the active menu element
			changeActiveMenu: function(a) {
				var element = $("#" + a)
				// console.log(element);
				$(".menuLink").removeClass("active");
				element.addClass("active");
			}
		}
	});

});
define('deco3800---rms/controllers/config', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({

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

});
define('deco3800---rms/controllers/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		
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
					var t = Ember['default'].Object.create();
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
			var buoyrecord = Ember['default'].Object.create();
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

});
define('deco3800---rms/helpers/convert-unix', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports.convertUnix = convertUnix;

    function convertUnix(timestamp) {
    	var date,
    		monthNames,
    		secs = ((new Date()).getTime() / 1000) - timestamp,
    		minutes = secs / 60,
    		hours = minutes / 60,
    		days = hours / 24,
    		weeks = days / 7,
    		months = weeks / 4.34812,
    		years = months / 12;
        
        if (minutes < 1) {
        	secs = Math.floor(secs % 60);
            return secs + (secs > 1 ? " seconds ago" : " second ago");
        }
        if (hours < 1) {
        	hours = Math.floor(minutes % 60);
            return hours + (minutes > 1 ? " minutes ago" : " minute ago");
        }
        if (days < 1) {
        	hours = Math.floor(hours % 24);
            return hours + (hours > 1 ? " hours ago" : " hour ago");
        }
        else if (days < 4) {
        	days = Math.floor(days % 7);
        	return days + (days > 1 ? " days ago" : " day ago");
        }
        else {
        	date = new Date(timestamp * 1000);
        	monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        	return date.getDate() + " " + monthNames[date.getMonth()];
        }
    }

    exports['default'] = Ember['default'].HTMLBars.makeBoundHelper(convertUnix);

});
define('deco3800---rms/initializers/app-version', ['exports', 'deco3800---rms/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: 'App Version',
    initialize: function(container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  }

});
define('deco3800---rms/initializers/export-application-global', ['exports', 'ember', 'deco3800---rms/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function(){
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  };

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('deco3800---rms/router', ['exports', 'ember', 'deco3800---rms/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function() {
    this.route('config');
    this.route('warnings');
  });

  exports['default'] = Router;

});
define('deco3800---rms/routes/config', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function() {
			// SEMESTER 2 - use this code to hook up with the location of your server
			// return Ember.RSVP.hash({
			// 	sensor: $.get('http://syrah.timhadwen.com:33332/sensor_types')
			// });

			// dummy data version
			return {
				sensors: [
					Ember['default'].Object.create({
						"ID":0,
						"new":0,
						"colour":99,
						"better_low":0,
						"name":"Battery Level",
						"description":"The % battery remaining of the buoy",
						"unit":"Percent",
						"is_public":1,
						"bound_upper":100,
						"bound_lower":0
					}),
					Ember['default'].Object.create({
						"ID":1,
						"new":0,
						"colour":888,
						"better_low":1,
						"name":"Internal Humidity",
						"description":"The temperature in celcius currently inside the buoy",
						"unit":"Percent",
						"is_public":0,
						"bound_upper":0,
						"bound_lower":100
					}),
					Ember['default'].Object.create({
						"ID":2,
						"new":1,
						"colour":16711680,
						"better_low":1,
						"name":"Turbidity",
						"description":"Indicates how dirty the water is",
						"unit":"NTU",
						"is_public":1,
						"bound_upper":10000,
						"bound_lower":0
					})
				],
				buoys: [
					Ember['default'].Object.create({
						"ID": 1,
						"name": "Buoy 1",
						"last_ping": 1430626500
					}),
					Ember['default'].Object.create({
						"ID": 2,
						"name": "Buoy 2",
						"last_ping": 1430626500
					}),
					Ember['default'].Object.create({
						"ID": 3,
						"name": "Buoy 3",
						"last_ping": 1430626500
					}),
					Ember['default'].Object.create({
						"ID": 4,
						"name": "Buoy 4",
						"last_ping": 1430626500
					}),
					
				]
			}

			//dummy data version
			// return [
			// 	{
			// 		sensor: 1,
			// 		name: 'temperature',
			// 		description: 'The temperature in celcius currently inside the buoy',
			// 		metric: 'degrees'
			// 	}, {
			// 		sensor: 2,
			// 		name: 'turbidity',
			// 		description: 'How dirty the water is',
			// 		metric: 'g/ml'
			// 	}
				
			// ];
		}
	});

});
define('deco3800---rms/routes/index', ['exports'], function (exports) {

	'use strict';

	exports['default'] = Ember.Route.extend({
		model: function() {
			// SEMESTER 2 - use this code to hook up with the location of your server
			// return Ember.RSVP.hash({
			// 	readings: $.get('/api/v1/readings'),
			// 	sensor: $.get('/api/v1/sensor')
			// });


			//but for now have some dummy data
			return [
				{
					readingID: 1,
					buoy: 1,
					timestamp: 1430626500,
					lat: -27.44613423,
					lng: 153.07834625,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}, {
					readingID: 2, 
					buoy: 2,
					timestamp: 1430712900,
					lat: -27.42693772,
					lng: 153.20674896,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}, {
					readingID: 3, 
					buoy: 3,
					timestamp: 1430712900,
					lat: -27.491475, 
					lng: 153.006655,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}, {
					readingID: 4, 
					buoy: 4,
					timestamp: 1430712900,
					lat: -27.400357, 
					lng: 153.177995,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}
			];

			// sensors [{
			// 	1: {
			// 		name: 
			// 	}
			// }];
		}
	});

});
define('deco3800---rms/routes/warnings', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
	});

});
define('deco3800---rms/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Dashboard");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Config");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("Warnings");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2,"class","title");
        var el3 = dom.createTextNode("RMS");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","menu");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","active menuLink");
        dom.setAttribute(el3,"id","dashboard");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","menuLink");
        dom.setAttribute(el3,"id","config");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","menuLink");
        dom.setAttribute(el3,"id","warnings");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 3]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element0, [5]);
        var morph0 = dom.createMorphAt(element1,0,1);
        var morph1 = dom.createMorphAt(element2,0,1);
        var morph2 = dom.createMorphAt(element3,0,1);
        var morph3 = dom.createMorphAt(fragment,1,2,contextualElement);
        element(env, element1, context, "action", ["changeActiveMenu", "dashboard"], {"on": "click"});
        block(env, morph0, context, "link-to", ["index"], {}, child0, null);
        element(env, element2, context, "action", ["changeActiveMenu", "config"], {"on": "click"});
        block(env, morph1, context, "link-to", ["config"], {}, child1, null);
        element(env, element3, context, "action", ["changeActiveMenu", "warnings"], {"on": "click"});
        block(env, morph2, context, "link-to", ["warnings"], {}, child2, null);
        content(env, morph3, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('deco3800---rms/templates/components/graphs-view', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("reading: ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,-1);
          content(env, morph0, context, "record.buoy");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        block(env, morph0, context, "each", [get(env, context, "data")], {"keyword": "record"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('deco3800---rms/templates/components/maps-view', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("div");
        dom.setAttribute(el0,"id","map-canvas");
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('deco3800---rms/templates/config', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createTextNode("\n			    	");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"id","save");
            var el3 = dom.createTextNode(" Save ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element5 = dom.childAt(fragment, [13, 1]);
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),-1,-1);
            var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),-1,-1);
            var morph2 = dom.createMorphAt(dom.childAt(fragment, [5]),-1,-1);
            var morph3 = dom.createMorphAt(dom.childAt(fragment, [7]),-1,-1);
            var morph4 = dom.createMorphAt(dom.childAt(fragment, [9]),-1,-1);
            var morph5 = dom.createMorphAt(dom.childAt(fragment, [11]),-1,-1);
            content(env, morph0, context, "record.ID");
            inline(env, morph1, context, "input", [], {"type": "text", "class": "textinput", "value": get(env, context, "record.name")});
            inline(env, morph2, context, "input", [], {"type": "text", "class": "textinput", "value": get(env, context, "record.description")});
            inline(env, morph3, context, "input", [], {"type": "text", "class": "textinput", "value": get(env, context, "record.unit")});
            inline(env, morph4, context, "input", [], {"type": "text", "class": "textinput", "value": get(env, context, "record.bound_upper")});
            inline(env, morph5, context, "input", [], {"type": "text", "class": "textinput", "value": get(env, context, "record.bound_lower")});
            element(env, element5, context, "action", ["saveSensor", get(env, context, "record")], {});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createTextNode(" \n			    	");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"id","edit");
            var el3 = dom.createTextNode(" Edit ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content, get = hooks.get, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element4 = dom.childAt(fragment, [13, 1]);
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),-1,-1);
            var morph1 = dom.createMorphAt(dom.childAt(fragment, [3]),-1,-1);
            var morph2 = dom.createMorphAt(dom.childAt(fragment, [5]),-1,-1);
            var morph3 = dom.createMorphAt(dom.childAt(fragment, [7]),-1,-1);
            var morph4 = dom.createMorphAt(dom.childAt(fragment, [9]),-1,-1);
            var morph5 = dom.createMorphAt(dom.childAt(fragment, [11]),-1,-1);
            content(env, morph0, context, "record.ID");
            content(env, morph1, context, "record.name");
            content(env, morph2, context, "record.description");
            content(env, morph3, context, "record.unit");
            content(env, morph4, context, "record.bound_upper");
            content(env, morph5, context, "record.bound_lower");
            element(env, element4, context, "action", ["editSensor", get(env, context, "record")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("		  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,1);
          block(env, morph0, context, "if", [get(env, context, "record.edit")], {}, child0, child1);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","btn-sml btn-pinged");
            var el2 = dom.createTextNode(" \n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" Pinged\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element2 = dom.childAt(fragment, [1]);
            var morph0 = dom.createMorphAt(element2,0,1);
            element(env, element2, context, "action", ["pingBuoy", get(env, context, "record")], {});
            content(env, morph0, context, "record.name");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1,"class","btn-sml btn-pinged");
              var el2 = dom.createTextNode(" \n						Loading...\n					");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, element = hooks.element;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element1 = dom.childAt(fragment, [1]);
              element(env, element1, context, "action", ["pingBuoy", get(env, context, "record")], {});
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1,"class","btn-sml btn-ping");
              var el2 = dom.createTextNode(" \n						Ping ");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" \n					");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element0 = dom.childAt(fragment, [1]);
              var morph0 = dom.createMorphAt(element0,0,1);
              element(env, element0, context, "action", ["pingBuoy", get(env, context, "record")], {});
              content(env, morph0, context, "record.name");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            block(env, morph0, context, "if", [get(env, context, "record.loading")], {}, child0, child1);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("			");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element3 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element3, [1]),0,1);
          var morph1 = dom.createMorphAt(dom.childAt(element3, [3]),-1,-1);
          block(env, morph0, context, "if", [get(env, context, "record.pinged")], {}, child0, child1);
          inline(env, morph1, context, "convert-unix", [get(env, context, "record.last_ping")], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","wrapperConfig");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","configHeader");
        var el3 = dom.createTextNode("Config Sensors");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","description");
        var el3 = dom.createTextNode("All sensors can be viewed and configured here");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"class","tbl");
        dom.setAttribute(el2,"cellspacing","0");
        dom.setAttribute(el2,"cellpadding","0");
        var el3 = dom.createTextNode("\n	  	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("ID");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Description");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Unit");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Upper Bound");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Lower Bound");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","wrapperConfig");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","configHeader");
        var el3 = dom.createTextNode("Ping Buoy");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","description");
        var el3 = dom.createTextNode("Ping a Buoy to test for communication");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"class","tbl-secret");
        dom.setAttribute(el2,"cellspacing","0");
        dom.setAttribute(el2,"cellpadding","0");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("last successful ping");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 5]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [2, 5]),2,3);
        block(env, morph0, context, "each", [get(env, context, "model.sensors")], {"keyword": "record"}, child0, null);
        block(env, morph1, context, "each", [get(env, context, "model.buoys")], {"keyword": "record"}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('deco3800---rms/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Buoy ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(element0,0,1);
          var morph1 = dom.createMorphAt(element0,1,2);
          inline(env, morph0, context, "input", [], {"class": "checkbox", "type": "checkbox", "checked": get(env, context, "record.activated")});
          content(env, morph1, context, "record.name");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","left filterbar");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","box boxSelectBuoys");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Select Buoys");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","box boxTime");
        var el3 = dom.createTextNode("	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("Time");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("Date:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("Time:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","box boxFilters");
        var el3 = dom.createTextNode("	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Filters");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","left map");
        var el2 = dom.createTextNode(" \n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","left graphs");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","graphPlaceholder");
        var el3 = dom.createTextNode("GRAPHS");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),2,3);
        var morph1 = dom.createMorphAt(dom.childAt(element2, [3]),0,1);
        var morph2 = dom.createMorphAt(dom.childAt(element2, [5]),2,3);
        var morph3 = dom.createMorphAt(dom.childAt(element2, [7]),2,3);
        var morph4 = dom.createMorphAt(dom.childAt(fragment, [2]),0,1);
        block(env, morph0, context, "each", [get(env, context, "buoyActivated")], {"keyword": "record"}, child0, null);
        inline(env, morph1, context, "view", ["select"], {"content": get(env, context, "timeFilterToggle")});
        inline(env, morph2, context, "input", [], {"type": "text", "class": "textinput", "value": get(env, context, "sliceDate")});
        inline(env, morph3, context, "input", [], {"type": "text", "class": "textinput", "value": get(env, context, "sliceTime")});
        inline(env, morph4, context, "maps-view", [], {"model": get(env, context, "filteredModel")});
        return fragment;
      }
    };
  }()));

});
define('deco3800---rms/templates/warnings', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createTextNode("I am the warnings page RAAR!\n\n");
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('deco3800---rms/tests/blanket-options', function () {

  'use strict';

  /* globals blanket, module */

  var options = {
    modulePrefix: 'deco3800---rms',
    filter: '//.*deco3800---rms/.*/',
    antifilter: '//.*(tests|template).*/',
    loaderExclusions: [],
    enableCoverage: true,
    cliOptions: {
      reporters: ['json'],
      autostart: true
    }
  };
  if (typeof exports === 'undefined') {
    blanket.options(options);
  } else {
    module.exports = options;
  }

});
define('deco3800---rms/tests/helpers/resolver', ['exports', 'ember/resolver', 'deco3800---rms/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('deco3800---rms/tests/helpers/start-app', ['exports', 'ember', 'deco3800---rms/app', 'deco3800---rms/router', 'deco3800---rms/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';

  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function() {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
  exports['default'] = startApp;

});
define('deco3800---rms/tests/test-helper', ['deco3800---rms/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

  'use strict';

  ember_qunit.setResolver(resolver['default']);

});
define('deco3800---rms/tests/unit/controllers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function(assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('deco3800---rms/tests/unit/controllers/config-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:config', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function(assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('deco3800---rms/tests/unit/controllers/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function(assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('deco3800---rms/tests/unit/helpers/convert-unix-test', ['deco3800---rms/helpers/convert-unix', 'qunit'], function (convert_unix, qunit) {

  'use strict';

  qunit.module('ConvertUnixHelper');

  // Replace this with your real tests.
  qunit.test('it works', function(assert) {
    var result = convert_unix.convertUnix(42);
    assert.ok(result);
  });

});
define('deco3800---rms/tests/unit/routes/config-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:config', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function(assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('deco3800---rms/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });



  ember_qunit.test('it exists', function(assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('deco3800---rms/tests/unit/routes/warnings-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:warnings', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function(assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('deco3800---rms/config/environment', ['ember'], function(Ember) {
  var prefix = 'deco3800---rms';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("deco3800---rms/tests/test-helper");
} else {
  require("deco3800---rms/app")["default"].create({"name":"deco3800---rms","version":"0.0.0."});
}

/* jshint ignore:end */
//# sourceMappingURL=deco3800---rms.map