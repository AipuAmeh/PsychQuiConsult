import { gql } from "@apollo/client";

export const QUERY_PROVIDER = gql`
  query currentProvider {
    provider {
      _id
      username
      email
      patients
      chartNotes
    }
  }
`;

export const QUERY_PATIENT = gql`
  query currentPatient {
    patient {
      _id
      username
      email
      chartNotes
    }
  }
`;

export const QUERY_ALL_PATIENTS = gql`
  query getAllPatients {
    patient {
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