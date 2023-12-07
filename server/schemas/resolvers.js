const { Patient, ChartNote, Provider } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {},
    Mutation: {}
}