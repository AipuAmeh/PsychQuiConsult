import { gql } from "@apollo/client";

export const ADD_PROVIDER = gql`
  mutation addProvider(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addProvider(username: $username, email: $email, password: $password) {
      token
      provider {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_PATIENT = gql`
  mutation loginPatient($email: String!, $password: String!) {
    loginPatient(email: $email, password: $password) {
      token
      patient {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_PROVIDER = gql`
  mutation loginProvider($email: String!, $password: String!) {
    loginProvider(email: $email, password: $password) {
      token
      provider {
      _id
      username
      email
      password
      }
    }
  }
`;

export const ADD_PATIENT = gql`
  mutation addPatient($username: String!, $email: String!, $password: String!) {
    addPatient(username: $username, email: $email, password: $password) {
      token
      patient {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_CHARTNOTE = gql`
  mutation addChartNote($patient: String!, $noteText: String!) {
    addChartNote(patient: $patient, noteText: $noteText) {
      _id
      patient
      noteText
      dateCreated
    }
  }
`;

export const REMOVE_PATIENT = gql`
  mutation removePatient($patientId: ID!) {
    removePatient(patientId: $patientId) {
      _id
      username
      email
      password
      chartNotes {
        _id
        patient
        noteText
        dateCreated
      }
    }
  }
`;

export const REMOVE_CHARTNOTE = gql`
  mutation removeChartNote($noteId: ID!) {
    removeChartNote(noteId: $noteId) {
      _id
      patient
      noteText
      dateCreated
    }
  }
`;
