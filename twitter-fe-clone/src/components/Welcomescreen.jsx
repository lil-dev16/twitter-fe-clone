import React, { useEffect, useState } from 'react'

const Welcomescreen = () => {
  const [show, setShow] = useState(true);

  useEffect(()=> {
    console.log(show);
    setTimeout(()=> {
      setShow((prev) => {
        !prev
      })
      console.log(show);
    }, 2000)
  }, [])
  return (
    <div className={`${show ? 'block' : 'hidden'} w-[100%] h-[100vh] bg-black fixed welcome left-0 flex items-center justify-center`}>
        <h1 className='text-white font-bold text-6xl'>Welcome to my twitter clone</h1>
    </div>
  )
}

export default Welcomescreen