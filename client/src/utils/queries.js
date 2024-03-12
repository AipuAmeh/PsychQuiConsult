import { gql } from "@apollo/client";

export const QUERY_PROVIDER = gql`
  query currentProvider($providerId: ID!) {
   provider(providerId: $providerId) {
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
    patient(patientId: $patientId) {
      _id
      username
      email
    }
  }
`;
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
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
