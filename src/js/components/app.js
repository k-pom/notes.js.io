/** @jsx React.DOM */
'use strict';

var React = require("React");

var HeaderComponent = require("../components/header.js");
var ListComponent = require("../components/list.js");

var _ = require('underscore');

var AppComponent = React.createClass({

    render: function () {
        return (
    		<section id="app">
                <HeaderComponent />
                <div className="container">
                    <ListComponent />
                </div>
    		</section>

        );
    }
});

module.exports = AppComponent;
