import { gql } from "@apollo/client";

export const QUERY_PROVIDER = gql`
  query currentProvider($email: String!) {
    currentProvider(email: $email) {
      _id
      username
      email
      patients
      chartNotes
    }
  }
`;

export const QUERY_CURRENT_PATIENT = gql`
  query currentPatient($patientId: ID!) {
    currentPatient(patientId: $patientId) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ALL_PATIENTS = gql`
  query getAllPatients {
    patients {
      _id
      username
      email
    }
  }
`;

export const QUERY_SINGLE_PATIENT = gql`
  query getSinglePatient($patientId: ID!) {
    patient(patientId: $patientId) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CHARTNOTES = gql`
  query getChartNote($noteId: ID!) {
    chartNote(noteId: $noteId) {
      _id
      patient
      noteText
      dateCreated
    }
  }
`;
