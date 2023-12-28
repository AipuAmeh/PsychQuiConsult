import { gql } from "@apollo/client";

export const ADD_PROVIDER = gql`
  mutation addProvider(
    $username: String!
    $email: String!
    $password: String!
  ) {
    token
    currentProvider {
      _id
      username
    }
  }
`;

export const ADD_PATIENT = gql`
  mutation addPatient($username: String!, $email: String!, $password: String!) {
    token
    currentPatient {
      _id
      username
    }
  }
`;

export const LOGIN_PROVIDER = gql`
  mutation loginProvider($email: String!, $password: String!) {
    token
    currentProvider {
      _id
      username
    }
  }
`;

export const LOGIN_PATIENT = gql`
  mutation loginPatient($email: String!, $password: String!) {
    token
    currentPatient {
      _id
      username
    }
  }
`;

export const ADD_CHARTNOTE = gql`
  mutation addChartNote($patient: String!, $noteText: String!) {
    _id
    patient
    noteText
    dateCreated
  }
`;

export const REMOVE_PATIENT = gql`
  mutation removePatient($patientId: ID!) {
    removePatient {
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
    removeChartNote {
      _id
      patient
      noteText
      dateCreated
    }
  }
`;
