import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Table } from 'react-bootstrap'

// interface Animals {
//   nickName: string
//   animalType: string
//   age: number
//   dateBorn: Date
// }

// interface AnimalsData {
//   Animals: Animals
// }

const GET_ANIMALS = gql`
  {
    Animals {
      name
      nickName
      animalType
      age
      dateBorn
    }
  }
`

const PeopleTable: React.FC = () => {
  const { loading, data } = useQuery(GET_ANIMALS)
  return (
    <>
      {!loading ? (
        <Table>
          <thead>
            <tr>
              {Object.keys(data.Animals[0]).map((val, index) => (
                <th key={index}>{val}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.Animals.map((val: object, index: number) => (
              <tr key={index}>
                {Object.values(val).map((va, index) => (
                  <td key={index}>{va}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        'Loading'
      )}
    </>
  )
}

export default PeopleTable
