'use strict';

var Backbone = require("Backbone");

var RouteModel = Backbone.Model.extend({

    defaults: {
        "username": null,
        "page": 0
    }
});

var route = new RouteModel();
module.exports = route;
