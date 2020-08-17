import React from 'react'
import { useQuery, gql } from '@apollo/client';

const STUDENT_LIST = gql`
  query GetStudent {
    students{
        name
    }
  }
`;

const Students = () => {
    const { loading, error, data } = useQuery(STUDENT_LIST)

    if (loading) return <p>loading...</p>
    
    if (error) return <p>error</p>

    const {students} = data
    return (
        <div>
            <h3>Student list</h3>
        </div>
    )
}

export default Students