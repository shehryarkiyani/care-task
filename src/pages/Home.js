import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { Navigate,useNavigate } from 'react-router-dom';
import { getUser,saveUser } from '../redux/actions';

const Home = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  let state=useSelector((state)=>state.setUser)
  const dispatch = useDispatch();

  const doLogin = (e) => {
    e.preventDefault();
    let newUser={
      email:email,
      password:password
  }
    dispatch(saveUser(newUser))
navigate("/dashboard")
   
  };
  useEffect(()=>{
  dispatch(getUser())
  console.log(state)

  },[])

  return (
   <>
   {state.email.length==0? <div>
      <h1>Login Page</h1>
      <form onSubmit={doLogin}>
      <input name="role" type="text" onChange={e => setemail(e.target.value)}/>
      <br />
      <input name="password" type="password" onChange={e => setPassword(e.target.value)}/>
      <br />
      <button>Login</button>
    </form>
    </div>:<Navigate to="/dashboard"/>}
   </>
  )
};

export default Home;
