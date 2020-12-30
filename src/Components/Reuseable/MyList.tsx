import React from 'react'
import { ListGroup } from 'react-bootstrap'

interface Data {
  [index: number]: string
  label: String
  value: String
}
interface Props {
  data: [Data]
  label_style: object
  value_style: object
}

const MyList: React.FC<Props> = ({ data, label_style, value_style }) => {
  return (
    <>
      <ListGroup className='text-left'>
        {data.map((val, index) => (
          <ListGroup.Item key={index}>
            <span style={label_style}>{val.label} : </span>
            <span style={value_style}>{val.value}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default MyList
