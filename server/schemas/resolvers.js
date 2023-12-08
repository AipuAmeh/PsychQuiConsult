const { Patient, ChartNote, Provider } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    currentProvider: async (parent, { email }) => {
      return Provider.findOne({ email }).populate("patients");
    },
    currentPatient: async (parent, { email }) => {
      return Patient.findOne(parent, { email }).populate("chartNotes");
    },
    getAllPatients: async () => {
      return Patient.find().populate("chartNotes");
    },
    getSinglePatient: async (parent, { patientId }) => {
      return Patient.findOne({ _id: patientId }).populate("chartNotes");
    },
    getChartNote: async (parent, { noteId }) => {
      return ChartNote.findOne({ _id: noteId });
    },
  },
  Mutation: {
    addProvider: async (parent, { username, email, password }) => {
      const provider = await Provider.create({ username, email, password });
      const token = signToken(provider);
      return { token, provider };
    },
    addPatient: async (parent, { username, email, password }) => {
      const patient = await Patient.create({ username, email, password });
      const token = signToken(provider);
      return { token, patient };
    },
    loginProvider: async (parent, { email, password }) => {
      const provider = await Provider.findOne({ email });

      if (!provider) {
        throw AuthenticationError;
      }

      const correctPw = provider.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(provider);
      return { token, provider };
    },
    loginPatient: async (parent, { email, password }) => {
        const patient = await Patient.findOne({ email });

        if (!patient) {
          throw AuthenticationError;
        }
  
        const correctPw = provider.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        const token = signToken(patient);
        return { token, patient };
    },
    addChartNote: async (parent, { patientId, noteText }) => {
        const chartNote = await ChartNote.create({ noteText });

        // should chart note belong to provider?
            // provider has chart notes and patients
    }
  },
};

module.exports = resolvers;
