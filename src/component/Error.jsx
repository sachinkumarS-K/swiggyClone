import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
     const err = useRouteError();
     console.log(err)
  return (
    <div>
      <h1> {err.status} and {err.statusText} Something went wrong</h1>
    </div>
  )
}

export default Error
