
/* REST API TEST */

// Setup Rest Client 
var endpoint = "http://api.nguyenresearch.com:8080/gumball";
var Client = require('node-rest-client').Client;
var client = new Client();

// Setup Vows
var vows = require('vows'),
    assert = require('assert');

// Helper for REST Testing
function assertStatus(code) {
    return function (e, res) {
        assert.equal (res.statusCode, code);
    };
}

// Helper for REST Testing
var api = {
    get: function (path) {
        return function () {
            client.get(path, this.callback);
        };
    }
};

// Create a Test Suite
vows.describe('Hello Test').addBatch(
{   'GET /': {
        topic: api.get( endpoint ),
        'should respond with a 200 OK': assertStatus(200)
    }
}
).run(); // Run it