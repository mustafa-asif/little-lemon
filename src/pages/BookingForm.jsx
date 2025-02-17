import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {

  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const [headCount,setHeadCount] = useState('');
  const [occassion,setOccassion] = useState('');

  const navigate = useNavigate();
  const handlerBookingPage=()=>{
    navigate('/bookingPage');
  }

  return (
    <>
    <form action='submit'>
      <label>
        Date:
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} required />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} required/>
      </label>
      <label>
        Number of Guests:
        <input type="number" value={headCount} onChange={(e)=>setHeadCount(e.target.value)} required />
      </label>
      <select name="Occasion" id="occassion">
        <option value={occassion} selected onChange={(e)=>setOccassion(e.target.value)}>Birthday</option>
        <option value={occassion}  onChange={(e)=>setOccassion(e.target.value)}>Anniversary</option>
      </select>
      
      <div>
        <button type='submit' >Submit</button>
      </div>
    
    </form>
    <div>
      <button onClick={handlerBookingPage}>Back to Booking Page</button>
    </div>
  
    </>
  
  )
}

export default BookingForm
