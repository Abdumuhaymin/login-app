import React from 'react'

const MainHeader = ({name}) => {
  return (
    <div >
      <a className='hover:text-primary' href="#">{name}</a>
    </div>
  )
}

export default MainHeader
