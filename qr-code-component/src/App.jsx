import React from 'react'

function App() {
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className='bg-white p-4 flex flex-col text-center space-y-5 max-w-80 w-full rounded-3xl'>
        <img
          src="/image-qr-code.png"
          alt="qr-code"
          className='rounded-xl'
        />
        <h2 className='text-slate-900 font-bold text-2xl'>Improve your front-end skills by building projects</h2>
        <p className='text-slate-500 mx-2 mb-6'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App
