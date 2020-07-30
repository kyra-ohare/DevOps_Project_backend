// Swagger is documentation generator for Fastify.
// It uses the schemas you declare in your routes to generate a swagger compliant doc.
// Link to npm fastify-swagger:
// https://www.npmjs.com/package/fastify-swagger

exports.options = {
    routePrefix: '/documentation', // This is the route to access the documentation
    exposeRoute: true,
    swagger: {
        info: {
            title: 'HelloYou API',
            description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
            version: '1.0.0',
            contact: {
                name: 'Kleyton O\'Hare',
                email: 'kleyton.ohare@gmail.com',
                // url: 'https://helloyou.netlify.app'
            },
        },
        externalDocs: {
            url: 'https://helloyou.netlify.app',
            description: 'Check out the front-end here'
        },
        host: 'helloyou.netlify.app',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [             // tags are used to group the end-points
            { name: 'user', description: 'User related end-points' },
            // { name: 'code', description: 'Code related end-points' }
        ],
        // definitions: {
        //     User: {
        //         $id: 'User',
        //         type: 'object',
        //         // required: ['id', 'email'],
        //         properties: {
        //             id: { type: 'string', format: 'uuid' },
        //             firstName: { type: 'string', nullable: true },
        //             lastName: { type: 'string', nullable: true },
        //             email: { type: 'string', format: 'email' }
        //         }
        //     }
        // },
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'apiKey',
                in: 'header'
            }
        },
    }
}