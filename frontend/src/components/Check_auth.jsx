import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Check_auth = ({children , protectedRoute}) => {

    const navigate = useNavigate()
    const [loading ,setLoading] = useState(true)

    useEffect (()=>{
        const token = localStorage.getItem("token")

        if( protectedRoute ) {
            if( !token ) {
                navigate('/login')
            }
            else {
                setLoading(()=> !loading)
            }
        } else {
            if(token){
                navigate('/')
            } else {
                setLoading(false)
            }
        }

    } , [navigate , protectedRoute]

)

  if( loading ) {
    return <div> Loading...</div>
  } else {
    return children
  }
}

export default Check_auth
