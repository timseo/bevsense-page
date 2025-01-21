import React from 'react'

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <div className='bg-[#F5F5F5]'>
    <div className='container mx-auto'>
      {children}
    </div>
  </div>
)

export default MainLayout