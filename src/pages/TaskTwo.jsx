import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TaskTwo = () => {

    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');

  useEffect(()=>{
    const fetchUser = async () =>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUser(response.data);
            setLoading(false);
        } catch (error) {
            setError("failed to fetch users");
            setLoading(false);
        }
    }
    fetchUser();
  },[])

  if(loading) return <div>Loading ...</div>
  if(error) return <div>{error}</div>

  return (
    <div>
        <h1 className='font-bold text-sky-400'>USER LIST</h1>
        <ul>
            {
                user.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default TaskTwo