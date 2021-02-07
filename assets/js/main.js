/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function() {
		  navigator.serviceWorker.register('/service-worker.js');
		});
	  }

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		'xlarge-to-max': '(min-width: 1681px)',
		'small-to-xlarge': '(min-width: 481px) and (max-width: 1680px)'
	});

	CountDownTimer('11/8/2022 7:00 AM', 'countdown');
							
	function CountDownTimer(dt, id){
		var end = new Date(dt);

		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;
		var timer;

		function showRemaining() {
			var now = new Date();
			var distance = end - now;
			if (distance < 0) {

				clearInterval(timer);
				document.getElementById(id).innerHTML = 'EXPIRED!';

				return;
			}
			var days = Math.floor(distance / _day);
			var hours = Math.floor((distance % _day) / _hour);
			var minutes = Math.floor((distance % _hour) / _minute);
			var seconds = Math.floor((distance % _minute) / _second);

			document.getElementById(id).innerHTML = days + ' days ';
		}

		timer = setInterval(showRemaining, 1000);
	}

	function hitApi(url, callback) {
		var req = new XMLHttpRequest();
	  
		req.addEventListener('load', onLoad);
		req.addEventListener('error', onFail);
		req.addEventListener('abort', onFail);
	  
		req.open('GET', url);
		req.send();
	  
		function onLoad(event) {
		  if (req.status >= 400) {
			onFail(event);
		  } else {
			var json = JSON.parse(this.responseText);
			callback(null, json);
		  }
		}
	  
		function onFail(event) {
		  callback(new Error('...'));
		}
	}

	$(function() {

		var	$window = $(window),
			$head = $('head'),
			$body = $('body');
			state = window.location.hash,
			state_id = null;

		function get_state_id(state) {
			switch (state) {
				case '#alabama':
					state_id = 'al';
					break;
				case '#alaska':
					state_id = 'ak';
					break;
				case '#arizona':
					state_id = 'az';
					break;
				case '#arkansas':
					state_id = 'ar';
					break;
				case '#california':
					state_id = 'ca';
					break;
				case '#colorado':
					state_id = 'co';
					break;
				case '#connecticut':
					state_id = 'ct';
					break;
				case '#delaware':
					state_id = 'de';
					break;
				case '#florida':
					state_id = 'fl';
					break;
				case '#georgia':
					state_id = 'ga';
					break;
				case '#hawaii':
					state_id = 'hi';
					break;
				case '#idaho':
					state_id = 'id';
					break;
				case '#illinois':
					state_id = 'il';
					break;
				case '#indiana':
					state_id = 'in';
					break;
				case '#iowa':
					state_id = 'ia';
					break;
				case '#kansas':
					state_id = 'ks';
					break;
				case '#kentucky':
					state_id = 'ky';
					break;
				case '#louisiana':
					state_id = 'la';
					break;
				case '#maine':
					state_id = 'me';
					break;
				case '#maryland':
					state_id = 'my';
					break;
				case '#massachusetts':
					state_id = 'ma';
					break;
				case '#michigan':
					state_id = 'mi';
					break;
				case '#minnesota':
					state_id = 'mn';
					break;
				case '#mississippi':
					state_id = 'ms';
					break;
				case '#missouri':
					state_id = 'mo';
					break;
				case '#montana':
					state_id = 'mt';
					break;
				case '#nebraska':
					state_id = 'ne';
					break;
				case '#nevada':
					state_id = 'nv';
					break;
				case '#new-hampshire':
					state_id = 'nh';   
					break;
				case '#new-jersey':
					state_id = 'nj';
					break;
				case '#new-mexico':
					state_id = 'nm';
					break;
				case '#new-york':
					state_id = 'ny';
					break;
				case '#north-carolina':
					state_id = 'nc';
					break;
				case '#north-dakota':
					state_id = 'nd';
					break;
				case '#ohio':
					state_id = 'oh';
					break;
				case '#oklahoma':
					state_id = 'ok';
					break;
				case '#oregon':
					state_id = 'or';
					break;
				case '#pennsylvania':
					state_id = 'pa';
					break;
				case '#rhode-island':
					state_id = 'ri';
					break;
				case '#south-carolina':
					state_id = 'sc';
					break;
				case '#south-dakota':
					state_id = 'sd';
					break;
				case '#tennessee':
					state_id = 'tn';
					break;
				case '#texas':
					state_id = 'tx';
					break;
				case '#utah':
					state_id = 'ut';
					break;
				case '#vermont':
					state_id = 'vt';
					break;
				case '#virginia':
					state_id = 'va';
					break;
				case '#washington':
					state_id = 'wa';
					break;
				case '#west-virginia':
					state_id = 'wv';
					break;
				case '#wisconsin':
					state_id = 'wi';
					break;
				case '#wyoming':
					state_id = 'wy';
					break;
			}
			return state_id;
		}

		var airtable_person = 

			{'<>':'article','id':'person-${id}','html':[
			
				{'<>':'div','class':'seated','html':[

					// Name
					{'<>':'h3','class':'name','text':'${fields.full_name} - ','html':[
						{'<>':'abbr','class':'party','title':'${fields.party}','text':'${fields.party}'}
					]},

					// District
					{'<>':'h4','class':function(){if( ( this.fields.district  !== "" ) || ( this.fields.district === "Unknown" ) ) { return 'district' } else { return 'hide' }},'html':function(){if( this.fields.district !== undefined ) { return 'District '+ this.fields.district;}} ,},

					// Seated or Candidate
					{'<>':'div','class':'seated-or-candidate seated','html':'Seated'},

					// Controls
					{'<>':'ul','class':'controls'}

				]}
			
			]};

		var airtable_connections =
		{'<>':'li','class':'control','html':[
			{'<>':'span', 'class': 'badge bg-${fields.Stance}','text': '${fields.Stance}'},
			{'<>':'strong', 'html': '<a href="#" target="_blank">${fields.control_name}</a>'},
		]};

		function get_people_by_state(state_abbr){
			state_abbr = state_abbr.toUpperCase();
			var Airtable = require('airtable');
			var base = new Airtable({apiKey: 'keymZqTCLLLGgEcUW'}).base('appnnYim9SMBtDlnT');
			base('US Legislators').select({
				maxRecords: 1000,
				view: "Grid view",
				filterByFormula: "state = '"+ state_abbr +"'"
			}).eachPage(function page(people, fetchNextPage) {
				// This function (`page`) will get called for each page of records.

				render_people(people);

				people.forEach(function(person) {
					connections = person.fields.connections;
					if(connections) {
						connections.forEach(function(connection_id) {
							base('connections').find(connection_id, function(err, connection) {
								if (err) { console.error(err); return; }
								render_connection(connection,person.id);
							});
						});
					}
				});
		
				// To fetch the next page of records, call `fetchNextPage`.
				// If there are more records, `page` will get called again.
				// If there are no more records, `done` will get called.
				fetchNextPage();
		
			}, function done(err) {
				if (err) { console.error(err); return; }
			});
		}
		
		function get_position_by_id(position_id){
			var Airtable = require('airtable');
			var base = new Airtable({apiKey: 'keymZqTCLLLGgEcUW'}).base('appnnYim9SMBtDlnT');
			base('Positions').find(position_id, function(err, record) {
				if (err) { console.error(err); return; }
				return record;
			});
		}

		function get_connection_by_id(connection_id){
			var Airtable = require('airtable');
			var base = new Airtable({apiKey: 'keymZqTCLLLGgEcUW'}).base('appnnYim9SMBtDlnT');
			base('connection').find(connection_id, function(err, record) {
				if (err) { console.error(err); return; }
				return record;
			});
		}
		
		function render_people(data){
			var us_senators = [];
			var us_representatives = [];
		
			if( ! data.fields ) {
				$('#us_senators .posts').empty();
				$('#us_representatives .posts').empty();
			}
		
			data.forEach(function(record) {
				if (record.fields.type == "sen") {
					us_senators.push(record);
				}
				if (record.fields.type == "rep") {
					us_representatives.push(record);
				}
			});
			us_representatives.sort(function (a,b) {
				return a.fields.district-b.fields.district
			});
			
			$('#us_senators .posts').empty().json2html(us_senators,airtable_person);
			$('#us_representatives .posts').empty().json2html(us_representatives,airtable_person);
		}
		
		function render_position(position,person_id){
			if( position.fields.Status !== 'Approved' ) { return; }
			if( person_id = position.fields['US Legislators']['0']){
				$('#person-'+ person_id +' .positions').empty().json2html(position,airtable_positions);
			}
		}

		function render_connection(connection,person_id){
			if( person_id = connection.fields.Person[0]){
				$('#person-'+ person_id +' .controls').json2html(connection,airtable_connections);
			}
		}

		function set_active_state_label() {
			$('#states a').removeClass('active');
			$('#states a[href="'+  window.location.hash +'"]').addClass('active');
			var active_state_label = $('#states a.active').text();
			$('.selected-state').text(active_state_label);
		}

		function isInt(value) {
			return !isNaN(value) && 
				parseInt(Number(value)) == value && 
				!isNaN(parseInt(value, 10));
		}

		$window.on('load', async function() {
			if (!window.location.hash && !localStorage.state) {
				const response = await fetch('https://ipinfo.io/geo');
				const json = await response.json();
				if(json.country === 'US') {
					state = window.location.hash = `#${json.region.toLowerCase().replace(/\s/, '-')}`
					localStorage.setItem('state', state);
				}
			} else if (!window.location.hash && localStorage.state) {
				state =	window.location.hash = localStorage.state;
			}
			state_id = get_state_id(state);
			get_people_by_state(state_id);
			set_active_state_label();
		});

		$(window).on('hashchange', function() {
			state = window.location.hash;
			state_id = get_state_id(state);
			get_people_by_state(state_id);
			set_active_state_label();
		});

		// Disable animations/transitions ...

			// ... until the page has loaded.
				$body.addClass('is-loading');

				$window.on('load', function() {
					setTimeout(function() {
						$body.removeClass('is-loading');
					}, 100);
				});

			// ... when resizing.
				var resizeTimeout;

				$window.on('resize', function() {

					// Mark as resizing.
						$body.addClass('is-resizing');

					// Unmark after delay.
						clearTimeout(resizeTimeout);

						resizeTimeout = setTimeout(function() {
							$body.removeClass('is-resizing');
						}, 100);

				});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Fixes.

			// Object fit images.
				if (!skel.canUse('object-fit')
				||	skel.vars.browser == 'safari')
					$('.image.object').each(function() {

						var $this = $(this),
							$img = $this.children('img');

						// Hide original image.
							$img.css('opacity', '0');

						// Set background.
							$this
								.css('background-image', 'url("' + $img.attr('src') + '")')
								.css('background-size', $img.css('object-fit') ? $img.css('object-fit') : 'cover')
								.css('background-position', $img.css('object-position') ? $img.css('object-position') : 'center');

					});

		// Sidebar.
			var $sidebar = $('#sidebar'),
				$sidebar_inner = $sidebar.children('.inner');

			// Inactive by default on <= large.
				skel
					.on('+large', function() {
						$sidebar.addClass('inactive');
					})
					.on('-large !large', function() {
						$sidebar.removeClass('inactive');
					});

			// Hack: Workaround for Chrome/Android scrollbar position bug.
				if (skel.vars.os == 'android'
				&&	skel.vars.browser == 'chrome')
					$('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>')
						.appendTo($head);

			// Toggle.
				if (skel.vars.IEVersion > 9) {

					$('<a href="#sidebar" class="toggle">Toggle</a>')
						.appendTo($sidebar)
						.on('click', function(event) {

							// Prevent default.
								event.preventDefault();
								event.stopPropagation();

							// Toggle.
								$sidebar.toggleClass('inactive');

						});

				}

			// Events.

				// Link clicks.
					$sidebar.on('click', 'a', function(event) {

						// >large? Bail.
							if (!skel.breakpoint('large').active)
								return;

						// Vars.
							var $a = $(this),
								href = $a.attr('href'),
								target = $a.attr('target');

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Check URL.
							if (!href || href == '#' || href == '')
								return;

						// Hide sidebar.
							$sidebar.addClass('inactive');

						// Redirect to href.
							setTimeout(function() {

								if (target == '_blank')
									window.open(href);
								else
									window.location.href = href;

							}, 500);

					});

				// Prevent certain events inside the panel from bubbling.
					$sidebar.on('click touchend touchstart touchmove', function(event) {

						// >large? Bail.
							if (!skel.breakpoint('large').active)
								return;

						// Prevent propagation.
							event.stopPropagation();

					});

				// Hide panel on body click/tap.
					$body.on('click touchend', function(event) {

						// >large? Bail.
							if (!skel.breakpoint('large').active)
								return;

						// Deactivate.
							$sidebar.addClass('inactive');

					});

			// Scroll lock.
			// Note: If you do anything to change the height of the sidebar's content, be sure to
			// trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

				$window.on('load.sidebar-lock', function() {

					var sh, wh, st;

					// Reset scroll position to 0 if it's 1.
						if ($window.scrollTop() == 1)
							$window.scrollTop(0);

					$window
						.on('scroll.sidebar-lock', function() {

							var x, y;

							// IE<10? Bail.
								if (skel.vars.IEVersion < 10)
									return;

							// <=large? Bail.
								if (skel.breakpoint('large').active) {

									$sidebar_inner
										.data('locked', 0)
										.css('position', '')
										.css('top', '');

									return;

								}

							// Calculate positions.
								x = Math.max(sh - wh, 0);
								y = Math.max(0, $window.scrollTop() - x);

							// Lock/unlock.
								if ($sidebar_inner.data('locked') == 1) {

									if (y <= 0)
										$sidebar_inner
											.data('locked', 0)
											.css('position', '')
											.css('top', '');
									else
										$sidebar_inner
											.css('top', -1 * x);

								}
								else {

									if (y > 0)
										$sidebar_inner
											.data('locked', 1)
											.css('position', 'fixed')
											.css('top', -1 * x);

								}

						})
						.on('resize.sidebar-lock', function() {

							// Calculate heights.
								wh = $window.height();
								sh = $sidebar_inner.outerHeight() + 30;

							// Trigger scroll.
								$window.trigger('scroll.sidebar-lock');

						})
						.trigger('resize.sidebar-lock');

					});

		// Menu.
			var $menu = $('#menu'),
				$menu_openers = $menu.children('ul').find('.opener');

			// Openers.
				$menu_openers.each(function() {

					var $this = $(this);

					$this.on('click', function(event) {

						// Prevent default.
							event.preventDefault();

						// Toggle.
							$menu_openers.not($this).removeClass('active');
							$this.toggleClass('active');

						// Trigger resize (sidebar lock).
							$window.triggerHandler('resize.sidebar-lock');

					});

				});

	});

})(jQuery);
