var gutil = require('gulp-util'),
    through = require('through2'),
    _ = require('underscore'),
    PluginError = require('plugin-error');

var PLUGIN_NAME = 'gulp-underscore-xform';

module.exports = function (settings, param) {
    settings = settings || {};

    function compile (file) {
        var html = file.contents.toString();
        return _.template(html, settings)(param);
    }

    return through.obj(function (file, enc, callback) {

        if (file.isNull()) {
            this.push(file);
            return callback();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return callback();
        }

        try {
            var content = compile(file);
            file.contents = new Buffer(content);
        } catch (err) {
            this.emit('error', new PluginError(PLUGIN_NAME, err, {fileName: file.path}));
            return callback();
        }

        this.push(file);
        callback();
    });
};
