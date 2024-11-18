import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS =[{id:'e1',title:'Some event'},{id:'e2',  title:'Another event'}]
export default function EventsPage() {
  return (
    <>
    {/* <p><Link to='..'>Back</Link></p> */}
    <h1>
      EventsPage
    </h1>
    <ul>
      {DUMMY_EVENTS.map((event) => <li key={event.id}><Link to={event.id}>{event.title}</Link></li>)}
    </ul>
    </>
  )
}
