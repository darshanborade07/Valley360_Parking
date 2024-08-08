import React from 'react'
import { LuParkingCircle } from "react-icons/lu";
import {MdMenu} from "react-icons/md"


const NavbarMenu = [

    {
        id: 1,
        title: "Home",
        link:"/",
    },
    {
        id: 2,
        title: "Admin",
        link:"#",
    },
    {
        id: 3,
        title: "About Us",
        link:"#",
    },
    {
        id: 4,
        title: "Contact us",
        link:"#",
    },

];
   



const Navbar = () => {
  return (
    <>
   <nav >
    <div className="container flex justify-evenly items-center- py-4 md:pt-4">
        {/*  Logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase '>
        <p className="text-primary">Valle</p>
        <p className="text-secondary">360</p>
        <p className="text-primary" >Parking</p>
        <LuParkingCircle className='text-green-600'/>
        </div>



        <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
                {NavbarMenu.map((menu)=>(
                    <li key={menu.id} className='text-xl'>
                        <a href={menu.link}
                        className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                        >{menu.title}</a>
                        </li>
                    ))}
                    
            </ul>
            
        </div>
       
       
        
    </div>



   </nav>


  
   </>

  )
}

export default Navbar
