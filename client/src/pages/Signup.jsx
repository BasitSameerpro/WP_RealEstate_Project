import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function Signup() {
  const [formData,setFormData] =useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate=useNavigate();
  const handleChange= (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null); // Clear any previous error before submitting
  
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const text = await res.text(); // First get response as text
      console.log(text); // Log the response
  
      if (!text) {
        setError("No response from server");
        setLoading(false);
        return;
      }
  
      const data = JSON.parse(text); // Then parse it
  
      if (data.success === false) {
        setError(data.message); // Set error message if there's an issue
      } else {
        setError(null); // Clear any existing error upon successful sign up
      }
      setLoading(false);
      navigate('/sign-in')
    } catch (error) {
      setError(error.message); // Catch any errors and display them
      setLoading(false);
    }
  };
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='User Name' 
        className='border p-3 rounded-xl focus:outline-none' id='username'  onChange={handleChange}></input>
        <input type='email' placeholder='Email' className='border p-3 rounded-xl focus:outline-none' id='email' onChange={handleChange}></input>
        <input type='password' placeholder='Password' className='border p-3 rounded-xl focus:outline-none' id='password' onChange={handleChange}></input>
        <button disabled={loading} className='bg-slate-700 text-white p-3
        rounded-lg uppercase hover:opacity-80' >{loading? 'Loading.....' : "Sign Up"} </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
        <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && (
    <p className='text-red-500 text-center my-2 bg-red-100 p-3 rounded-lg'>
    {error}
  </p>
)}
    </div>
  )
}
