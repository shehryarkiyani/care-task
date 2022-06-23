import React from 'react'
import {useNavigate,Navigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {logout } from '../redux/actions'
const Dashboard = () => {
  const navigate=useNavigate()
  const dipatch=useDispatch()
  const state= useSelector((state)=>state.setUser)
  const Logout=(e)=>{
   dipatch(logout())
   navigate("/")
  }
  return (
    <>
    { state.email.length!=0?
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href='/'>{state.email}</a>
  

 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarText">
   <ul className="navbar-nav mr-auto">
    
   </ul>
   <button className="navbar-text btn btn-danger" onClick={Logout}>
     Logout
   </button>
 </div>
 </nav>
   <div className='container'>
       
         <h1>Dashboard</h1>

       </div>
 </>: <Navigate to="/"/> 
  }
        </>
  )
}

export default Dashboard