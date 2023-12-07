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
token: ID
currentProvider: Provider
}

type patientAuth {
token: ID
currentPatient: Patient
}

type Query {
currentProvider(email: String!): Provider
currentPatient(email: String!): Patient
getAllPatients: [Patient]
getSinglePatient(patientId: ID!): Patient
getChartNote(noteId: ID!): ChartNote
}

type Mutation {
addProvider(username: String!, email: String!, password: String!): providerAuth
addPatient(username: String!, email: String!, password: String!): patientAuth
loginProvider(username: String!, password: String!): providerAuth
loginPatient(username: String!, password: String!): patientAuth
createChartNote(patientId: ID!): ChartNote 
removePatient(patientId: ID!): Patient
removeChartNote(patientId: ID!, noteId: ID!) ChartNote 
}
`;

module.exports = typeDefs;
