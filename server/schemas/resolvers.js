const { Patient, ChartNote, Provider } = require("../models");

const { signProviderToken, signPatientToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    patient: async (parent, { patientId }) => {   
      return Patient.findOne({ _id: patientId });
    },
    provider: async (parent, { providerId }) => {
      return Provider.findOne({ _id: providerId });
    },
    getAllPatients: async () => {
      return Patient.find().populate("chartNotes");
    },
    getSinglePatient: async (parent, { patientId }) => {
      return Patient.findOne({ _id: patientId });
    },
    getChartNote: async (parent, { noteId }) => {
      return ChartNote.findOne({ _id: noteId });
    },
  },
  Mutation: {
    addProvider: async (parent, { providerName, email, password }) => {
      const provider = await Provider.create({ providerName, email, password });
      const token = signProviderToken(provider);
      return { token, provider };
    },
    addPatient: async (parent, { username, email, password }) => {
      const patient = await Patient.create({ username, email, password });
      const token = signPatientToken(patient);
      return { token, patient };
    },
    // addPatientDetails: async (parent, { firstname, lastname, dob, email, phone }) => {

    // },
    loginPatient: async (parent, { email, password }) => {
      try {
        const patient = await Patient.findOne({ email });
        if (!patient) {
          throw AuthenticationError;
        }

        const correctPw = await patient.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signPatientToken(patient);
        console.log("PATIENT:", patient);
        return { token, patient };
      } catch (error) {
        throw new Error("Authentication failed");
      }
    },
    loginProvider: async (parent, { email, password }) => {
      try {
        const provider = await Provider.findOne({ email });
        if (!provider) {
          throw AuthenticationError;
        }

        const correctPw = await provider.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signProviderToken(provider);
        console.log("PROVIDER:", provider);
        return { token, provider };
      } catch (error) {
        throw new Error("Authentication failed");
      }
    },
    addChartNote: async (parent, { patient, noteText }) => {
      const chartNote = await ChartNote.create({ patient, noteText });

      await Patient.findOneAndUpdate(
        { username: patient },
        { $addToSet: { chartNotes: chartNote._id } },
        { new: true }
      );
      return chartNote;
    },
    removePatient: async (parent, { patientId }) => {
      return Patient.findOneAndDelete({ _id: patientId });
    },
    removeChartNote: async (parent, { noteId }) => {
      return ChartNote.findOneAndDelete({ _id: noteId });
    },
  },
};

module.exports = resolvers;
