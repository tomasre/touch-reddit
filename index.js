

var Hapi = require('hapi');
var Inert = require('inert');

var server = new Hapi.Server();
server.connection({
    port: 8080
});

// register inert for static content
server.register(Inert, function (err) {
    if (err) {
        console.log('ERROR registering Inert');
        console.log(err);
    }
});

server.start(function () {
    console.log('server running at: ' + server.info.uri);
});

/*
 serve up the angular app
 */
server.route({
    method: 'GET',
    path: '/{param*}',
    config: {
        handler: {
            directory: {
                path: '.'
            }
        }
    }
});