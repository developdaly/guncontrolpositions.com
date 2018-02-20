/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		'xlarge-to-max': '(min-width: 1681px)',
		'small-to-xlarge': '(min-width: 481px) and (max-width: 1680px)'
	});

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
			state_id = '';

		function get_state_id(state) {
			switch (state) {
				case '#alabama':
					state_id = 1;
					break;
				case '#alaska':
					state_id = 2;
					break;
				case '#arizona':
					state_id = 3;
					break;
				case '#arkansas':
					state_id = 4;
					break;
				case '#california':
					state_id = 5;
					break;
				case '#colorado':
					state_id = 6;
					break;
				case '#connecticut':
					state_id = 7;
					break;
				case '#delaware':
					state_id = 8;
					break;
				case '#florida':
					state_id = 9;
					break;
				case '#georgia':
					state_id = 10;
					break;
				case '#hawaii':
					state_id = 11;
					break;
				case '#idaho':
					state_id = 12;
					break;
				case '#illinois':
					state_id = 13;
					break;
				case '#indiana':
					state_id = 14;
					break;
				case '#iowa':
					state_id = 15;
					break;
				case '#kansas':
					state_id = 16;
					break;
				case '#kentucky':
					state_id = 17;
					break;
				case '#louisiana':
					state_id = 18;
					break;
				case '#maine':
					state_id = 19;
					break;
				case '#maryland':
					state_id = 20;
					break;
				case '#massachusetts':
					state_id = 21;
					break;
				case '#michigan':
					state_id = 22;
					break;
				case '#minnesota':
					state_id = 23;
					break;
				case '#mississippi':
					state_id = 24;
					break;
				case '#missouri':
					state_id = 25;
					break;
				case '#montana':
					state_id = 26;
					break;
				case '#nebraska':
					state_id = 27;
					break;
				case '#nevada':
					state_id = 28;
					break;
				case '#new-hampshire':
					state_id = 29;   
					break;
				case '#new-jersey':
					state_id = 30;
					break;
				case '#new-mexico':
					state_id = 31;
					break;
				case '#new-york':
					state_id = 32;
					break;
				case '#north-carolina':
					state_id = 33;
					break;
				case '#north-dakota':
					state_id = 34;
					break;
				case '#ohio':
					state_id = 35;
					break;
				case '#oklahoma':
					state_id = 36;
					break;
				case '#oregon':
					state_id = 37;
					break;
				case '#pennsylvania':
					state_id = 38;
					break;
				case '#rhode-island':
					state_id = 39;
					break;
				case '#south-carolina':
					state_id = 40;
					break;
				case '#south-dakota':
					state_id = 41;
					break;
				case '#tennessee':
					state_id = 42;
					break;
				case '#texas':
					state_id = 43;
					break;
				case '#utah':
					state_id = 44;
					break;
				case '#vermont':
					state_id = 45;
					break;
				case '#virginia':
					state_id = 46;
					break;
				case '#washington':
					state_id = 47;
					break;
				case '#west-virginia':
					state_id = 48;
					break;
				case '#wisconsin':
					state_id = 49;
					break;
				case '#wyoming':
					state_id = 50;
					break;
			}
			return state_id;
		}

		var person = 
			
			{'<>':'article','html':[

				{'<>':'div','class':function(){seatedorcandidate = this.gsx$seatedorcandidate.$t; return seatedorcandidate.toLowerCase();},'html':[

					// Name
					{'<>':'h3','class':'name','text': '${gsx$name.$t} - ','html':[
						{'<>':'abbr','class':'party','title':'${gsx$party.$t}','text':'${gsx$partyabbr.$t}'}
					]},

					// District
					{'<>':'h4','class':function(){if( ( this.gsx$housedistrict.$t  !== "" ) || ( this.gsx$housedistrict.$t === "Unknown" ) ) { return 'district' } else { return 'hide' }},'html':function(){if( ( this.gsx$housedistrict.$t  !== "" ) || ( this.gsx$housedistrict.$t === "Unknown" ) ) { return 'District '+ this.gsx$housedistrict.$t;}} ,},

					// Seated or Candidate
					{'<>':'div','class':'seated-or-candidate ${gsx$seatedorcandidate.$t}','html':'${gsx$seatedorcandidate.$t}'},

					// Fundraising
					{'<>':'div','class':function(){if( ( this.gsx$fundraisingamount.$t === "" ) || ( this.gsx$fundraisingamount.$t === "Unknown" ) ) { return 'hide' } else { return 'fundraising' }},'html':[
						{'<>':'div','class':'amount','text':'${gsx$fundraisingamount.$t} raised as of ${gsx$fundraisingamountasofdate.$t}'},
						{'<>':'div','class':'source','html':[
							{'<>':'a','target':'_blank','href':'${gsx$fundraisingsource.$t}','text':'${gsx$fundraisingsourcelabel.$t}'},
						]}
					]},

					// NRA
					{'<>':'div','class':function(){if( this.gsx$nraendorsed.$t === "TRUE" ) { return 'nra endorsed' } else { return 'hide' }},'html':[
						{'<>':'div','class':'nra-endorsement','text':'Endorsed by the NRA'},
						{'<>':'div','class':'source','html':[
							{'<>':'a','target':'_blank','href':'https://www.nrapvf.org/grades/'},
						]}
					]},

					// Position
					{'<>':'div','class':'position','html':'${gsx$position.$t}'},
					{'<>':'div','class':'source','html':[
						{'<>':'a','target':'_blank','href':'${gsx$positionsource.$t}','text':'${gsx$positionsourcelabel.$t}'},
					]}
					

				]}
			]};

		function get_data(state_id) {
			if( isInt(state_id)) {
				hitApi('https://spreadsheets.google.com/feeds/list/1fLGuUuYjk94p31hbpKFfQuhUsrz1rCpQgQ6z2VaA3RY/'+ state_id +'/public/values?alt=json', function(error, data) {
					if (error) {
						console.log('there was an error', error);
					} else {
						var governors = [];
						var us_seantors = [];
						var us_representatives = [];

						$.each(data.feed.entry, function() {
							if (this.gsx$role.$t == "Governor") {
								governors.push(this);
							}
							if (this.gsx$role.$t == "U.S. Senator") {
								us_seantors.push(this);
							}
							if (this.gsx$role.$t == "U.S. House Representative") {
								us_representatives.push(this);
							}
						});
						
						$('#governor .posts').empty().json2html(governors,person,[{"replace":true}]);
						$('#us_senators .posts').empty().json2html(us_seantors,person);
						$('#us_representatives .posts').empty().json2html(us_representatives,person);
					}
				});
			}
		}

		$window.on('load', function() {
			state = window.location.hash;
			state_id = get_state_id(state);
			get_data(state_id);
		});

		$(window).on('hashchange', function() {
			state = window.location.hash;
			state_id = get_state_id(state);
			get_data(state_id);
		});

		$('#states a').click(function() {
			var text = $(this).text();
			$('#state').text(text);
		});

		function isInt(value) {
			return !isNaN(value) && 
				parseInt(Number(value)) == value && 
				!isNaN(parseInt(value, 10));
		}

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