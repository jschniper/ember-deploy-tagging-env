var chai              = require('chai');
var chaiAsPromised    = require('chai-as-promised');
var EnvTag            = require('../../../lib/env');

chai.use(chaiAsPromised);

var expect = chai.expect;

describe('Env Tag', function() {
    it ('raises an error if the EMBER_DEPLOY_TAG environment variable is not set', function() {
        if (typeof(process.env['EMBER_DEPLOY_TAG']) !== 'undefined') delete process.env['EMBER_DEPLOY_TAG'];

        expect(new EnvTag().createTag).to.throw(ReferenceError);
    });

    it('returns the EMBER_DEPLOY_TAG environment variable', function() {
        process.env['EMBER_DEPLOY_TAG'] = 'Holy Macaroni';
        expect(new EnvTag().createTag()).to.equal('Holy Macaroni');
    });
});
