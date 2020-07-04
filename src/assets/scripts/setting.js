$(window).on('load', function () {
	toggleSidebar();
	toggleSidebarListMenu();
	callbackModal();
	// calendarBooking();
});
$(window).scroll(function () {
	var window_sizescroll = $(window).width();
	if (window_sizescroll >= 992) {
		// scroll_events();
	} else {

	}
});

function scroll_events() {
	var scroll_top = $(window).scrollTop();
	// var animation_name = ' animated fadeInDown';
	if (scroll_top > 70) {
		$('header').addClass('fixed-header');
		setTimeout(function () {
			$('header').addClass('animate');
		}, 200)
	} else {
		$('header').removeClass('fixed-header animate');
	}
}

function callbackModal() {
	$('.confirm-delete').on('click', function () {
		$("#popupDelete").modal('hide');
		$('#toasts-msg-delete').toast('show');
	})
}

function toggleSidebar() {
	$('.btn-toggle-menu-sidebar').on('click', function () {
		$('header, .sidebar, .wrapper-content').toggleClass('reduce-size');

	})
}

function toggleSidebarListMenu() {
	$('.list-menu-sidebar>li>a').on('click', function () {
		if ($(this).hasClass('has-submenu')) {
			$(this).toggleClass('active');
			$(this).parent('li').toggleClass('active');
		}
	})
}

function calendarBooking() {
	var mockData = [
		{
			"id": "293",
			"title": "This is warning class event with very long title to check how it fits to evet in day view",
			"url": "http://www.example.com/",
			"class": "event-warning",
			"start": "1362938400000",
			"end": "1363197686300"
		},
		{
			"id": "256",
			"title": "Event that ends on timeline",
			"url": "http://www.example.com/",
			"class": "event-warning",
			"start": "1363155300000",
			"end": "1363227600000"
		},
		{
			"id": "276",
			"title": "Short day event",
			"url": "http://www.example.com/",
			"class": "event-success",
			"start": "1363245600000",
			"end": "1363252200000"
		},
		{
			"id": "294",
			"title": "This is information class ",
			"url": "http://www.example.com/",
			"class": "event-info",
			"start": "1363111200000",
			"end": "1363284086400"
		},
		{
			"id": "297",
			"title": "This is success event",
			"url": "http://www.example.com/",
			"class": "event-success",
			"start": "1363234500000",
			"end": "1363284062400"
		},
		{
			"id": "54",
			"title": "This is simple event",
			"url": "http://www.example.com/",
			"class": "",
			"start": "1363712400000",
			"end": "1363716086400"
		},
		{
			"id": "532",
			"title": "This is inverse event",
			"url": "http://www.example.com/",
			"class": "event-inverse",
			"start": "1364407200000",
			"end": "1364493686400"
		},
		{
			"id": "548",
			"title": "This is special event",
			"url": "http://www.example.com/",
			"class": "event-special",
			"start": "1363197600000",
			"end": "1363629686400"
		},
		{
			"id": "295",
			"title": "Event 3",
			"url": "http://www.example.com/",
			"class": "event-important",
			"start": "1364320800000",
			"end": "1364407286400"
		}
	];

	var options = {
		events_source: function () {
			return mockData;
		},
		view: 'month',
		day: 'now',


		// Container to append the tooltip
		tooltip_container: 'body',
// Width of the calendar
		width: '100%',
// Day Start time and end time with time intervals. Time split 10, 15 or 30.
		time_start: '06:00',
		time_end: '22:00',
		time_split: '30',
// Source of events data. It can be one of the following:
// - URL to return JSON list of events in special format.
//   {success:1, result: [....]} or for error {success:0, error:'Something terrible happened'}
//   events: [...] as described in events property description
//   The start and end variables will be sent to this url
// - A function that received the start and end date, and that
//   returns an array of events (as described in events property description)
// - An array containing the events


// 		events_source: '',


// Static cache of events. If set to true, events will only be loaded once.
// Useful if response is not constrained by date.
		events_cache: false,
// Set format12 to true if you want to use 12 Hour format instead of 24 Hour
		format12: false,
		am_suffix: "AM",
		pm_suffix: "PM",
// Path to templates should end with slash /. It can be as relative
// /component/bootstrap-calendar/tmpls/
// or absolute
// http://localhost/component/bootstrap-calendar/tmpls/
		tmpl_path: '../plugins/bootstrap-calendar/tmpls/',
		tmpl_cache: true,
		classes: {
			months: {
				inmonth: 'cal-day-inmonth',
				outmonth: 'cal-day-outmonth',
				saturday: 'cal-day-weekend',
				sunday: 'cal-day-weekend',
				holidays: 'cal-day-holiday',
				today: 'cal-day-today'
			},
			week: {
				workday: 'cal-day-workday',
				saturday: 'cal-day-weekend',
				sunday: 'cal-day-weekend',
				holidays: 'cal-day-holiday',
				today: 'cal-day-today'
			}
		},
// ID of the element of modal window. If set, events URLs will be opened in modal windows.
		modal: null,
//  modal handling setting, one of "iframe", "ajax" or "template"
		modal_type: "iframe",
//  function to set modal title, will be passed the event as a parameter
		modal_title: null,
		views: {
			year: {
				slide_events: 1,
				enable: 1
			},
			month: {
				slide_events: 1,
				enable: 1
			},
			week: {
				enable: 1
			},
			day: {
				enable: 1
			}
		},
		merge_holidays: false,
		display_week_numbers: true,
		weekbox: true,
//shows events which fits between time_start and time_end
		show_events_which_fits_time: false,
// Headers defined for ajax call
		headers: {},

		// ------------------------------------------------------------
// CALLBACKS. Events triggered by calendar class. You can use
// those to affect you UI
// ------------------------------------------------------------
		onAfterEventsLoad: function (events) {
			// Inside this function 'this' is the calendar instance
		},
		onBeforeEventsLoad: function (next) {
			// Inside this function 'this' is the calendar instance
			next();
		},
		onAfterViewLoad: function (view) {
			// Inside this function 'this' is the calendar instance
		},
		// onAfter
		// <a href="https://www.jqueryscript.net/tags.php?/Modal/">Modal</a>Shown: function(events) {
		// Inside this function 'this' is the calendar instance
		onAfterModalHidden: function (events) {
			// Inside this function 'this' is the calendar instance
		},
// -------------------------------------------------------------
// INTERNAL USE ONLY. DO NOT ASSIGN IT WILL BE OVERRIDDEN ANYWAY
// -------------------------------------------------------------
// 		events: [],
// 		templates: {
// 			year: '',
// 			month: '',
// 			week: '',
// 			day: ''
// 		},
		stop_cycling: false

		// ---more options here
	};

	// var calendar = $("#calendar").calendar(
	// 	{
	// 		tmpl_path: "/tmpls/",
	// 		events_source: function () { return []; }
	// 	});
	$('#calendar').calendar(options);
}

