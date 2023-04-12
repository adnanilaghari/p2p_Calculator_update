import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const AdminLayout = ({children}) => {
  return (
    <div className="w-full h-full">
    <Navbar isAdmin={true}/>
    {children}
    <Footer />
  </div>
  )
}

export default AdminLayout
