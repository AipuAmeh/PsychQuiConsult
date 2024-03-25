const typeDefs = `#graphql

  type Provider {
    _id: ID
    providerName: String
    email: String
    password: String
    patients: [Patient]!
  }

  type Patient {
    _id: ID
    firstname: String
    lastname: String
    dob: String
    username: String
    email: String
    password: String
    chartNotes: [ChartNote]!
  }

  type ChartNote {
    _id: ID
    noteText: String
    dateCreated: String
  }


  type providerAuth {
    token: ID!
    provider: Provider
  }

  type patientAuth {
    token: ID!
    patient: Patient
  }

  type Query {
    getAllPatients: [Patient]!
    getSinglePatient(patientId: ID!): Patient
    getChartNote(noteId: ID!): ChartNote
    patient(patientId: ID!): Patient
    provider(providerId: ID!): Provider
}

type Mutation {
    addProvider(providerName: String!, email: String!, password: String!): providerAuth
    addPatient(firstname:String!, lastname: String!, dob:String!,username: String!, email: String!, password: String!): patientAuth
    loginPatient(email: String!, password: String!): patientAuth
    loginProvider(email: String!, password: String!): providerAuth
    addChartNote(patient: String!, noteText: String!): ChartNote 
    removePatient(patientId: ID!): Patient
    removeChartNote(noteId: ID!): ChartNote 
}
`;

module.exports = typeDefs;
