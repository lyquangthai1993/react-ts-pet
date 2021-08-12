import React from 'react'

interface Props {
  
}

const Layout = (props: Props) => {
  return (
    <div>
      <button onClick={()=>localStorage.clear()}>Logout</button>
      Admin Layout
    </div>
  )
}

export default Layout
