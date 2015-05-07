var CoreObject   = require('core-object');

module.exports = CoreObject.extend({
    init: function() {
    },

    createTag: function() {
        var str = process.env.EMBER_DEPLOY_TAG;

        if (str === undefined) throw new ReferenceError("Environment variable EMBER_DEPLOY_TAG is missing");

        return this.manifest + ':' + str;
    }
});
