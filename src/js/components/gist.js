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
                    <div className='condensed'>
                        {gist.parsed(limit)}
                    </div>

                    ...&nbsp;
                    <a href="#">Read the whole post</a>
                </div>
            </div>
        );
    }
});


module.exports = GistComponent;
