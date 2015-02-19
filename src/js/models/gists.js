'use strict';

var Backbone = require("Backbone");


var Gist = Backbone.Model.extend({
    parsed: function(limit){
    /*
        Return either the first {limit} characters (truncated sanely)
        of the markdown file as parsed markdown, or the entire file if no limit
        is passed
    */

        this.get("markdown_file").raw_url
        console.log(this);
        if(limit){
            return "Short version...";
        }

        return "Long Version"
    }
});


var GistCollection = Backbone.Collection.extend({


    add: function(data, options){
    /*
        Only add it to the collection if it meets the criteria.
        That includes having a description and a valid Markdown file
    */
        var markdown_file = get_md(data.files)
        if(data.description != "" && markdown_file){
            data.markdown_file = markdown_file
            return Backbone.Collection.prototype.add.call(this, data, options);
        }
    }
});

/*
    Given a object full of files, iterate through and grab the first Markdown
*/
function get_md(gist_files){
    for (var i in gist_files) {
        if(gist_files[i].language == "Markdown"){
            return gist_files[i];
        }
    }
    return false
}

var gists = new GistCollection([], {
    model: Gist
});

module.exports = gists;
