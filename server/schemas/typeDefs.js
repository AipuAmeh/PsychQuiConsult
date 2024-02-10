const typeDefs = `#graphql
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
currentProvider: Provider
}

type patientAuth {
token: ID!
getSinglePatient: Patient
}

type Query {
getAllPatients: [Patient]
getSinglePatient(patientId: ID!): Patient
getChartNote(noteId: ID!): ChartNote
}

type Mutation {
addProvider(username: String!, email: String!, password: String!): providerAuth
addPatient(username: String!, email: String!, password: String!): patientAuth
loginPatient(email: String!, password: String!): patientAuth
addChartNote(patient: String!, noteText: String!): ChartNote 
removePatient(patientId: ID!): Patient
removeChartNote(noteId: ID!): ChartNote 
}
`;

module.exports = typeDefs;
