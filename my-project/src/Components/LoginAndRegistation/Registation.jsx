
import backgroundImage from '../../Images/Registation_Bg.jpg'; // Adjust the path as needed
import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



const Registration = () => {
     // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [roleId, setRoleId] = useState('');

  // Handler for form submission
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send a POST request to the backend with the form data
      await axios.post('http://localhost:8080/User/Register', {
        firstName,
        lastName,
        email,
        password,
        contact,
        gender,
        address,
        roleId: parseInt(roleId, 10), // Convert roleId to integer
      }).then(response =>{
        alert(response.password);
        console.log(response.password);
        toast.success("Signup Successful!"); // Display success message
        window.location.href = '/home';
      })
      
    } catch (error) {
      toast.error('There was an error signing up!', error); // Log any errors
    }
  };



  return (
    <div
      className='min-h-screen py-40'
      style={{
        backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)',
        backgroundSize: 'cover', // Ensure the gradient covers the entire background
      }}
    >
      <div className='container mx-auto'>
        <div className='flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden p-8'>
          <div 
            className='w-1/2 bg-cover flex flex-col items-center justify-center py-20 bg-no-repeat bg-center w-full ' 
            style={{
              backgroundImage: `url(${backgroundImage})`, // Apply the imported image
            }}
          >
            <h1 className='text-white text-3xl mb-3'>Welcome</h1>
            <h4 className='text-white mr-3'>Park Smart, Park Easy.</h4>
            <p className='text-white pl-4'>Hello!  Your perfect parking spot is just a registration away. Join us now!</p>
          </div>
        
          <div className='w-1/2 px-12'>
            <h2 className='text-3xl mb:4'>Register Here</h2>  
            <p className='mb-4'>Create your account. It's free and only take a minute</p>
            
            <form onSubmit={handleSignup}>

                <div className='grid grid-cols-2 gap-5'>
                    <input type='text' placeholder='FirstName' className='border border-gray-400 py-1 pc-2' value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                    <input type='text' placeholder='LastName' className='border border-gray-400 py-1 pc-2'value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                </div>
                
                <div className='mt-5'>
                    <input type='email' placeholder='Email' className='border border-gray-400 py-1 pc-2 w-full'  value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>

                <div className='mt-5'>
                <input type='password' placeholder='Password' className='border border-gray-400 py-1 px-2 w-full' value={password} onChange={(e) => setPassword(e.target.value)} required />

                </div>

                <div className='mt-5'>
                    <input type='tel' placeholder='Contact' className='border border-gray-400 py-1 pc-2 w-full' value={contact} onChange={(e) => setContact(e.target.value)} required></input>
                </div>

                <div className='mt-5'>
                    <input type='text' placeholder='Address' className='border border-gray-400 py-1 pc-2 w-full'value={address} onChange={(e) => setAddress(e.target.value)} required></input>
                </div>

                <div className='grid-cols-2 gap-5 mt-5'>
                    <span className='text-black mr-2'>Gender:</span>
                    <select className='border border-gray-400 py-1 pc-2  mr-4' value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    
                    <span className='text-black mr-2'>Role:</span>
                    <select className='border border-gray-400 py-1 pc-2  mr-4' value={roleId} onChange={(e) => setRoleId(e.target.value)} required>
                        <option value="">Select Role</option>
                        <option value="2">Owner</option>
                        <option value="3">Customer</option>
             
                    </select>
                </div>

                

                <div className='mt-5'>
                    <button type='submit' className='w-full bg-purple-600 py-3 text-center text-white'> Register Now </button>
                </div>

            </form>
          </div>
        </div>
      </div>
      {/* Optional: Place 'hi' where it fits your layout */}
    </div>
  );
};

export default Registration;
