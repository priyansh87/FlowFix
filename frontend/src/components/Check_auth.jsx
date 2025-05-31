import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Check_auth = ({children , protectedRoute}) => {

    const navigate = useNavigate()
    const [loading ,setLoading] = useState(true)

    useEffect (()=>{
        const token = localStorage.getItem("token")
        console.log(token)

        if( !protectedRoute ) {
            if( !token ) {
                console.log("idhar bhi ara hai")
                navigate('/signup')
            }
            else {
                console.log("idhar ara hai")
                navigate('/')
                setLoading(false)
            }
        } else {
            console.log("idhar bhi ara hai hehehe")
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
