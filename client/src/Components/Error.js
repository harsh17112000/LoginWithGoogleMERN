import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{textAlign:"center"}}>
        <h1>Error</h1>
        <button style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Back To Home</button>
      </div>
    </>
  )
}

export default Error