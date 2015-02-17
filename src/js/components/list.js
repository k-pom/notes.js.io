/** @jsx React.DOM */
'use strict';

var React = require("React");
var collection = require("../models/gists.js");
var GistComponent = require("../components/gist.js");

var GistList = React.createClass({

    componentDidMount: function() {
        collection.on("all", this.onGistsChange);
    },

    componentWillUnmount: function() {
        collection.off("all", this.onGistsChange);
    },

    onGistsChange: function () {
        console.log("CHANGING>>>")
        this.setState({"gists": collection});
    },

    getInitialState: function () {
        return {"gists": collection}
    },

    render: function () {
        if(this.state.gists.length == 0){
            return (<div>No gists</div>)
        }

        if(this.state.gists.length == 1){
            console.log(this.state.gists)
            return <GistComponent key={this.state.gists[0].id} gist={this.state.gists[0]}/>
        }

        console.log("RENDERING LIST")
        var gistList = this.state.gists.map(function (gist) {
            return (<GistComponent key={gist.id} gist={gist} limit="300"/>);
        });

        return (<div>LIST{gistList}</div>);
    }
});


module.exports = GistList;
