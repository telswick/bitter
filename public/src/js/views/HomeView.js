var Backbone = require('backbone');
var _ = require('underscore');

var HomeView = Backbone.View.extend({
		el:'\
			<div class="container">\
				<div class="row">\
					<div class="six columns">\
						<div class="row">\
							<div class="twelve columns" id="all-posts"></div>\
						</div>\
					</div>\
					<div class="three columns"></div>\
					<div class="three columns"></div>\
				</div>\
			</div>\
		',

		render: function() {
			var PostsCollection = require('../collections/PostsCollection.js');
			var posts = new PostsCollection();
			posts.fetch();
			var PostsListView = require('./PostsListView.js');
			var postsListView = new PostsListView({ 
				collection: posts
			});
			this.$el.find('#all-posts').html(postsListView.render().el);

			return this;
		}
	});

module.exports = HomeView;