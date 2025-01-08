// Create web server
var express = require('express');
var app = express();

// Create a route for GET /comments
app.get('/comments', function(req, res) {
	// Return JSON data
	res.json([
				{
					"id": 1,
					"text": "This is a comment"
				}
			]);
		});