'use strict';

var React = require("React");
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

require("./lib/routing.js");

var AppComponent = require("./components/app.js");


// method run when the application starts
$(document).ready(function () {
    React.renderComponent(new AppComponent(), $("#container").get(0));

    Backbone.history.start();
});
