/* jshint node: true */
'use strict';

var EnvTag = require('./lib/env');

module.exports = {
  name: 'ember-deploy-tagging-env',

  type: 'ember-deploy-addon',

  adapters: {
    tagging: {
      'env-tag': EnvTag
    }
  }
}
