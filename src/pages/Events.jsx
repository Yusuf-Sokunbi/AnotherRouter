import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
// const DUMMY_EVENTS =[{id:'e1',title:'Some event'},{id:'e2',  title:'Another event'}]


export default function EventsPage() {
 const events = useLoaderData()
 

 return (
    <>
      <EventsList events={events}/> 
    </>
  )
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if(!response.ok){
    //..
        } else {
    const resData = await response.json();
    return resData.events;
}
}