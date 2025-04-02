import React from 'react'

const Paragraph = ({children, dark}) => {
  return (
    <p className={`${dark ? 'text-white-100 opacity-60' : 'text-black-100 opacity-60'}`}>
      {children}
    </p>
  )
}

export default Paragraph
