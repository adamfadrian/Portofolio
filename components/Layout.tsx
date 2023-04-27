import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className=' h-full w-full overflow-auto dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-800 bg-gradient-to-r from-blue-300 to-cyan-200 '>{children}</div>
    </div>
  )
}

export default Layout