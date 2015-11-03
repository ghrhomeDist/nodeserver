var childProcess = require('child_process');
var assert = require('assert');
var http = require('http');



describe('Configurations checks', function(){
	it('No configuration set', function(done){
		var nodeserver = new require('../nodeserver')(false);
		nodeserver.start();

		assert.equal(0, nodeserver.websites.length, 'The number of web pages should be 0');
		assert.equal(undefined, nodeserver.admin, 'The admin should be undefined');

		done();
	});


	it('malformed configuration', function(done){
		var nodeserver = new require('../nodeserver')(false);
		nodeserver.readConfigFile('./configurations/malformed.config');
		nodeserver.start();

		assert.equal(0, nodeserver.websites.length, 'The number of web pages should be 0');
		assert.equal(undefined, nodeserver.admin, 'The admin should be undefined');

		done();
	});


	it('empty configuration', function(done){
		var nodeserver = new require('../nodeserver')(false);
		nodeserver.readConfigFile('./configurations/empty.config');
		nodeserver.start();

		assert.equal(0, nodeserver.websites.length, 'The number of web pages should be 0');
		assert.equal(undefined, nodeserver.admin, 'The admin should be undefined');

		done();
	});


	it('string properties configuration', function(done){
		var nodeserver = new require('../nodeserver')(false);
		nodeserver.readConfigFile('./configurations/string-properties.config');
		nodeserver.start();

		assert.equal(0, nodeserver.websites.length, 'The number of web pages should be 0');
		assert.equal(undefined, nodeserver.admin, 'The admin should be undefined');

		done();
	});
});