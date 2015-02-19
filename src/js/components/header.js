/** @jsx React.DOM */
'use strict';

var React = require("React");
var route = require("../models/route.js");

var app_router = require("../lib/routing.js");

var HeaderComponent = React.createClass({

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
            "user": route.get('username'),
            "page": route.get('page')
        });
    },

    // Route to the appropriate place
    routeToUser: function(event){
        var user = $("[name=github-user]").val()
        app_router.navigate("/"+user, {trigger: true});
    },

    // On enter, routeToUser
    onInputKeyDown: function (event) {
        if (event.key == "Enter") {
            this.routeToUser(event)
        }
    },

    render: function () {
        var that = this;

        if(this.state.user==null){
            return (
                <div className="jumbotron">
                    <h1>Welcome to notes.io</h1>
                    <p className="lead">Enter a github username to view a users markdown gists.</p>
                    <p>
                        <input name='github-user' className='large' onKeyDown={that.onInputKeyDown}/>
                        <button className="btn btn-lg btn-success" onClick={that.routeToUser}>
                            View Posts
                        </button>
                    </p>
                </div>
            )
        }

        var title = this.state.user +"'s Notes"
        document.title = title
        return (
            <div className='container'>
                <div className="navbar navbar-static-top">

                    <header className="container-fluid">
                        <a className="navbar-brand" href="/">Notes.io</a>
                        <ul className="nav navbar-nav">
                            <li className='active'><a href={"/" + that.state.user}>{that.state.user}.notes.io</a></li>
                            <li className='active'><a href={'https://github.com/' + that.state.user}>Github</a></li>
                        </ul>
                    </header>
                </div>
                <div className="blog-header">
                    <h1 className="blog-title">{title}</h1>
                    <p className="lead blog-description">A pretty compilation of githubs gists</p>
                </div>
            </div>
        );
    },
});

module.exports = HeaderComponent;
