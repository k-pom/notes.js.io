'use strict';

var Backbone = require("Backbone");

var RouteModel = Backbone.Model.extend({

    defaults: {
        "username": null,
        "page": 0,
        "gist_id": null
    }
});

var route = new RouteModel();
module.exports = route;
