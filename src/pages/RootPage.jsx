import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation'

export default function RootPage() {
  return (
    <>
     <MainNavigation />
     <p><Outlet /></p> 
    </>
  )
}
