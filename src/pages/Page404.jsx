import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
export default function page404() {
  return (
     <Spinner animation="border" role="status">
    <span className="visually-hidden loader">Loading...</span>
  </Spinner>
  )
}
