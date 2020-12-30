import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const HomePage: React.FC = () => {
  return (
    <>
      <Jumbotron style={{ background: 'black' }}>
        <div className='text-light'>
          <h1>My Family</h1>
        </div>
      </Jumbotron>
    </>
  )
}

export default HomePage
