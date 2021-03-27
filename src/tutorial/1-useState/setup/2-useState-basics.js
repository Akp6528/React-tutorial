import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('ashwani pandey')

  const handleClick = () => {
    if (text === 'Ashwani Pandey')
      setText('Pandey Ashwani')
    else
      setText('Ashwani Pandey')
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>Click Me</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
