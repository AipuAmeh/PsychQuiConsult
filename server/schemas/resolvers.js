const { Patient, ChartNote, Provider } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // currentProvider: async (parent, { email }) => {
    //   return Provider.findOne({ email }).populate("patients");
    // },
    // currentPatient: async (parent, { patientId }) => {
    //   return Patient.findOne({ _id: patientId });
    // },
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
      const token = signToken(patient);
      return { token, patient };
    },
    loginPatient: async (parent, { email, password }) => {
      try {
        const patient = await Patient.findOne({ email });
        console.log("-------------------------------------------");
        console.log("THIS IS MY PATIENTS EMAIL:", patient.email);
        if (!patient) {
          throw AuthenticationError;
        }
  
        const correctPw = await patient.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        console.log("IS MY PASSWORD CORRECT??", correctPw);
  
        const token = signToken(patient);
        return { token, patient };
      } catch (error) {
        throw new Error('Authentication failed')
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
