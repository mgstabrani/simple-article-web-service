const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const { config } = require('./config');

const init = async () => {
    const server = Hapi.server({
        port: config.PORT,
        host: config.SERVER_HOST,
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
            url: `mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`,
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