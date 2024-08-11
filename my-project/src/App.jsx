import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banners/Banner';
import Banner2 from './Components/Banners/Banner2';
import Footer from './Components/Footer/Footer';
import Registation from './Components/LoginAndRegistation/Registation';
import Login1 from './Components/LoginAndRegistation/LoginAdmin';
import Login from './Components/LoginAndRegistation/Login';
import ParkingSlotForm from './Components/OwnerDashBoard/AddParkingSlots';
import UserDashboard from './Components/UserDashBoard/UserDashBoard';
import ViewSlots from './Components/UserDashBoard/ViewSlots';
import AboutUs from './Components/Hero/AboutUs';
import ContactUs from './Components/Hero/ContactUs';
import BookParking from './Components/UserDashBoard/BookParking'
import Update from './Components/UserDashBoard/UpdateUser';
import AddParkingArea from './Components/OwnerDashBoard/AddParkingArea';
import UpdateParkingArea from './Components/OwnerDashBoard/UpdateParkingArea';
import OwnerDashboard from './Components/OwnerDashBoard/OwnerDashBoard';




function App() {
  const [count, setCount] = useState(0);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <main className='overflow-x-hidden'>
            <Navbar />
            <Hero />
            <Banner />
            <Banner2 />
            <Footer />
          </main>
        } />
        <Route path="/SignUp" element={<Registation />} />       
        <Route path="/AddParkingSlot/:parkAreaId" element={<ParkingSlotForm />} />
        <Route path='/AddParkingArea' element={<AddParkingArea/>}/>
        <Route path='/updateParkingArea' element={<UpdateParkingArea/>} />
        <Route path="/UserDashBoard" element={<UserDashboard />} />
        <Route path="OwnerDashBoard" element={<OwnerDashboard/>}/>
        <Route path="/ViewSlots/:parkingId" element={<ViewSlots />} />
        <Route path="/Book/:Slotid/:userid" element={<BookParking />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
