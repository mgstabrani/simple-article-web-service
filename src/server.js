const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.route(routes);

    await server.register({
        plugin: require('hapi-mongodb'),
        options: {
            url: 'mongodb://localhost:27017/test',
            settings : {
                useUnifiedTopology: true,
            },
            decorate: true,
        },
    });

    await server.start();

    console.log(`Server is running on port: ${server.info.uri}`);
};

init();