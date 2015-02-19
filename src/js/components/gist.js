/** @jsx React.DOM */
'use strict';

var React = require("React");

var GistComponent = React.createClass({

    getInitialState: function () {
        return {}
    },


    render: function () {

        var limit = this.props.limit;
        var gist = this.props.gist;
        var that = this;
        var link;

        if(limit){
            link = (<div><a href={"#" + gist.get('owner').login + "/posts/" + gist.get('id')}>Read the whole post</a></div>);
        } else {
            link = (<div><a href={"#" + gist.get('owner').login}>Back to posts</a></div>)
        }

        return (
            <div className="blog-post">
                <div className='container'>
                    <div className='col-lg-1'><img className='user_icon_med' src={gist.get('owner').avatar_url} /></div>
                    <div className='col-lg-11'>
                        <h2 className="blog-post-title">{gist.get('description')}</h2>
                        <p className="blog-post-meta">
                            {gist.get('created_at')}&nbsp;by&nbsp;
                            <a href="#">{gist.get("owner").login}</a>&nbsp;

                            Comments ({gist.get("comments")})
                        </p>
                    </div>
                </div><div className='blog-data'>
                    {gist.parsed(limit)}
                    {link}
                </div>
            </div>
        );
    }
});

module.exports = GistComponent;
