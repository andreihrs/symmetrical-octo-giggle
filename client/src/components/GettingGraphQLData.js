import React from "react"
import { graphql } from "react-apollo"
import { gql } from "apollo-boost"

const GET_USER_INFO = gql`
    {
        people {
            id
            firstName
            lastName
        }
    }
`;

const GettingGraphQLData = props => {
    return (
        <>
            <div className="list">
                <h3>Graph List</h3>
                <ol>
                    {props.data?.people?.map(p => (
                      <li key={p.id}>
                          <a>{p.firstName} {p.lastName}</a>
                      </li>  
                    ))}
                </ol>
            </div>
        </>
    );
};

export default graphql(GET_USER_INFO)(GettingGraphQLData);