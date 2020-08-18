import React from 'react'
import { useQuery, gql } from '@apollo/client';

const STUDENT_LIST = gql`
  query GetStudent {
    students{
        name
        age
    }
  }
`;

const Students = () => {
    const { loading, error, data } = useQuery(STUDENT_LIST)

    if (loading) return <p>loading...</p>
    
    if (error) return <p>error</p>

  const { students } = data
  console.log(students)
  
  return (
      
        <div>
          <h3>Student list</h3>
      {students.map((student, i) => <li key={i}>{student.name}</li>)}
        </div>
    )
}

export default Students