
var Backbone = require("Backbone");
var route = require("../models/route.js");
var github = require("../lib/github.js");

 var AppRouter = Backbone.Router.extend({
        routes: {
            "": "showHome",
            ":username/posts/:id": "showPost",
            ":username/pages/:page": "showPage",
            ":username": "showUser" // matches http://example.com/#anything-here
        }
    });

var app_router = new AppRouter;

app_router.on('route:showHome', function() {
    route.set({"username": null, "page": 0})
});

app_router.on('route:showUser', function(username) {
    route.set({"username": username, "page": 0});
    github.getGists(username);
});

app_router.on('route:showPage', function(user, page) {
    console.log('SHOWING PAGE FOR '+ user + " ("+page+")");
});

app_router.on('route:showPost', function(user, id) {
    console.log('SHOWING POST FOR '+ user + " ("+id+")");
});

module.exports = app_router;
