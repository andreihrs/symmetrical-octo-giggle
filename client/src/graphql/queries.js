import gql from "graphql-tag";

export const GET_EMPLOYEES = gql`
  {
    getEmployees {
      id
      name
      title
    }
  }
`;

export const GET_COMPANY_EMPLOYEES = gql`
  query Query($filter: String) {
    getCompanyEmployees(filter: $filter) {
      id
      name
      title
      company
    }
  }
`;
