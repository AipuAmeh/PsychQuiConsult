const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET_KEY
const expiration = process.env.EXPIRATION

module.exports = {
    AuthenticationError: new GraphQLError('Unable to authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED'
        }
    }),
    signToken: function({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload}, secret, { expiresIn: expiration });
    },
};