import React from 'react'
import SubContents from './subContents'
import Advertisement from './advertisement'

const Main = () => {
  return (
    <div className='main' >
        <SubContents/>
        <SubContents/>
        <SubContents/>
        <Advertisement/>
    </div>
  )
}

export default Main