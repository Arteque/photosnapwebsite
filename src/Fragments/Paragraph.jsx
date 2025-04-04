import React from 'react'

const Paragraph = ({children, dark, classname}) => {
  return (
    <p className={`${dark ? 'text-white-100 opacity-60' : 'text-black-100 opacity-60'} pb-[24px] ${classname}`}>
      {children}
    </p>
  )
}

export default Paragraph
