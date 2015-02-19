/** @jsx React.DOM */
'use strict';

var React = require("React");

var HeaderComponent = require("../components/header.js");
var ListComponent = require("../components/list.js");
var route = require("../models/route.js");

var _ = require('underscore');

var AppComponent = React.createClass({

    getInitialState: function () {
        return {"user": null}
    },

    componentDidMount: function() {
        route.on("change", this.routeChange);
    },
    componentWillUnmount: function() {
        route.off("change", this.routeChange);
    },

    routeChange: function(){
        this.setState({
            "user": route.get('username')
        });
    },

    render: function () {

        var list;

        // Only show the list if there is a user set
        if(this.state.user){
            list = <ListComponent />
        }

        return (
    		<section id="app">
                <HeaderComponent />
                <div className="container">
                    {list}
                </div>
    		</section>
        );
    }
});

module.exports = AppComponent;
