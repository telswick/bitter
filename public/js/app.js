'use strict';

// $(document).on('ready', function() {

	$.ajaxSetup({
	    headers: {
	        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	    }
	});

	var PostModel = Backbone.Model.extend({
		urlRoot: '/api/posts/',
		idAttribute: 'id',
	});

	

	

	var PostsCollection = Backbone.Collection.extend({
		url: '/api/posts/',
		model: PostModel
	});

	