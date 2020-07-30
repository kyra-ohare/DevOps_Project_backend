// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const swagger = require('./config/swagger');
const mongoose = require('mongoose');
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();    // parses the .env entries to a json format

// URL for database connection
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

// Connect to DB
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB connected…`))
    .catch(err => console.log(err))

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Register Fastify CORS
fastify.register(require('fastify-cors'), {
    origin: true    // enables 'Access-Control-Allow-Origin'
})

// Initialise the routes
routes.forEach((route, index) => {
    fastify.route(route);
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3001, '0.0.0.0');
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();