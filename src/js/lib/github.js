
var _ = require('underscore');
var gists = require("../models/gists.js");

var github = {

    getGists: function (username) {
        gists.reset([], {silent: true})
        $.get("https://api.github.com/users/" + username + "/gists",function(response){
            _.each(response, function(data){
                gists.add(data, {silent: true});
            })
            gists.trigger("change");
        })
    }

};

module.exports = github;
