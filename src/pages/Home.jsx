import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
  <> 
   <h1>
  HomePage      
 </h1>
 <p><Link to='/events'>Events</Link></p>
 </>
  )
}
