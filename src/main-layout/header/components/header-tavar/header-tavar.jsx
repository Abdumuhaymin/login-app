import React from 'react'

const HeaderTavar = ({img,title}) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <img src={img} alt="img" />
      <p className='hover:text-primary'>{title}</p>
    </div>
  )
}

export default HeaderTavar
