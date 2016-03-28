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

	// Add Views for Home and Posts	

var HomeView = Backbone.View.extend({
		el:'\
			<div class="container">\
				<div class="row">\
					<div class="three columns"></div>\
					<div class="six columns">\
						<div class="row">\
							<div class="twelve columns"></div>\
						</div>\
						<div class="row">\
							<div class="twelve columns"></div>\
						</div>\
					</div>\
					<div class="three columns" id="all-posts"></div>\
				</div>\
			</div>\
		',

		render: function() {
			var posts = new PostsCollection();
			posts.fetch();
			var postsListView = new PostsListView({ 
				collection: posts
			});
			this.$el.find('#all-posts').html(postsListView.render().el);

			return this;
		}
	});

	var PostsListView = Backbone.View.extend({
		el: '<ul></ul>',

		template: _.template('\
			<% posts.each(function(post) { %>\
				<li><a href="#"><%= post.get("text") %></a></li>\
			<% }) %>\
		'),

		initialize: function() {
			this.listenTo(this.collection, 'update', this.render);
		},

		render: function() {
			this.$el.html(this.template({ posts: this.collection }));
			return this;
		}
	})


	var homeView = new HomeView();
	$('#content').html(homeView.render().el);

// })
