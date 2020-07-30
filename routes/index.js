// The schemas below is to generate the Swagger documentation
// More info:
// https://www.npmjs.com/package/fastify-swagger

const userController = require('../controllers/userController');

// Declaration of the API routes
const routes = [
    {
        method: 'GET',
        url: '/api/users',
        schema: {
            summary: 'retrives all the users',
            description: 'It retrieves all the users from the database',
            tags: ['user'],
        },
        handler: userController.getUsers
    },
    {
        method: 'GET',
        url: '/api/users/:id',
        schema: {
            summary: 'retrives a user',
            description: 'It retrieves one specific user from the database',
            tags: ['user'],
            params: {
                type: 'integer',
                properties: {
                    id: {
                        type: 'string',
                        description: 'user id',
                    }
                }
            }
        },
        handler: userController.getSingleUser
    },
    {
        method: 'POST',
        url: '/api/users',
        schema: {
            summary: 'adds a name',
            description: 'It adds a new entry to the database\nThe added entry is the user\'s name',
            tags: ['user'],
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string' }
                }
            }
        },
        handler: userController.addUser
    },
    {
        method: 'DELETE',
        url: '/api/users/:id',
        schema: {
            summary: 'deletes a user\'s name',
            description: 'It deletes an entry from the database\nThe deleted entry is the user\'s name',
            tags: ['user'],
        },
        handler: userController.deleteUser
    }
];

module.exports = routes