import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState("");

    const REGISTER = '/auth'

    const handleSubmit = async (e) => {
       e.preventDefault();
       setUsername("");
       setPassword("")
    try {
        const response = axios.post(REGISTER, 
            JSON.stringify({username, password}),
            {
                headers: {"Content-Type" : "applicattion/json"},
                withCredentials: true
            }
            )
    } catch (error) {
        
    }
    }
  return (
    <main className='flex flex-col items-center'>
       <h1>Register</h1>
        <form action="">
       <label htmlFor="username">Username:</label>
       <input 
       className='p-4 border-2'
       type="text" 
       id='username'
       value={username}
       onChange={(e)=>setUsername(e.target.value)}
       />

       <label htmlFor="password">Password:</label>
       <input 
       className="p-4 border-2"
       type="password" 
       id='password'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />

       <button onClick={handleSubmit}>Submit</button>
        </form>
    </main>
  )
}

export default Register