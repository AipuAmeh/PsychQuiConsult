const typeDefs = `#graphql
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Provider {
    _id: ID
    username: String
    email: String
    password: String
    patients: [Patient]!
  }

  type Patient {
    _id: ID
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
    #profiles: [Profile]!
    #profile(profileId: ID!): Profile
    getAllPatients: [Patient]!
    getSinglePatient(patientId: ID!): Patient
    getChartNote(noteId: ID!): ChartNote
    patient(patientId: ID!): Patient
    provider(providerId: ID!): Provider
}

type Mutation {
    #addProfile(name: String!, email: String!, password: String!): Auth
    #login(email: String!, password: String!): Auth
    addProvider(username: String!, email: String!, password: String!): providerAuth
    addPatient(username: String!, email: String!, password: String!): patientAuth
    loginPatient(email: String!, password: String!): patientAuth
    loginProvider(email: String!, password: String!): providerAuth
    addChartNote(patient: String!, noteText: String!): ChartNote 
    removePatient(patientId: ID!): Patient
    removeChartNote(noteId: ID!): ChartNote 
}
`;

module.exports = typeDefs;
