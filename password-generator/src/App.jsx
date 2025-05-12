import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setsymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

// useCallback for memoiezation fo function defination
  const passwordGenerator = useCallback(() => {
    
    const number = "0123456789";
    const symbol = "!@#$%&*(){}[]?/~";
    let charAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let requireChar = []; //array for ensuring atleast one number and symbole
    if (numberAllowed) {
      charAllowed += number;
      requireChar.push(number[Math.floor(Math.random() *number.length)]);   //logic for atleast one number
    }
    if (symbolAllowed) {
      charAllowed += symbol;
      requireChar.push(symbol[Math.floor(Math.random() *symbol.length)]);   //login for atleast one symbol
    }

    let pass = requireChar.join("");  //joining array element for getting string


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * charAllowed.length);
      pass += charAllowed.charAt(char);
    }

    pass.split("").sort(() => 0.5 - Math.random()).join("");  //shuffle password for ensuring randomness of password

    setPassword(pass);

  }, [length, numberAllowed, symbolAllowed, setPassword]);    //add dependencies for useCallback 



  //useEffect to calling the function every time when one of these dependencies changes
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);



  //useRef for getting reference of input field
  const passwordRef = useRef(null);

  //This gives a better user experience by selecting the password while copying
  const passwordCopy = useCallback(() => {
    passwordRef.current?.select();  //if any reference (password) is exist then select it
    window.navigator.clipboard.writeText(password);   //copying password in clipboard
  }, [password]);
  

  return (
    <>
      <div className='flex flex-col justify-center items-center my-[50px] mx-auto bg-slate-700 rounded-2xl p-4 w-[600px]'>
        <h2 className='text-3xl font-bold my-5'>Password Generator</h2>


        <div className='flex w-[500px] relative hover:scale-102 duration-500'>
          <input
            type="text"
            value={password}
            name="password"
            id="password"
            readOnly
            ref={passwordRef}
            className='bg-white text-gray-700 font-bold p-4 m-auto w-full rounded-lg outline-none' />
          <button
            onClick={passwordCopy}
            className='bg-blue-500 p-4 absolute right-0 rounded-r-lg cursor-pointer hover:bg-blue-700 duration-500'>Copy</button>
        </div>


        <div className='w-[500px] py-4 px-2 flex sm:flex-row flex-col
        sm:justify-between items-center gap-3 text-[20px]'>

          <div className='flex gap-2 hover:scale-105 duration-500'>
            <input
              type="range"
              min={6}
              max={50}
              id="length"
              value={length}
              className='w-35 cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          <div className='flex gap-2 hover:scale-105 duration-500'>
            <input
              type="checkbox"
              name="number"
              id="number"
              defaultChecked={numberAllowed}
              className='w-4'
              onChange={(e) => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className='flex gap-2 hover:scale-105 duration-500'>
            <input
              type="checkbox"
              name="symbol"
              id="symbol"
              defaultChecked={symbolAllowed}
              className='w-4'
              onChange={() => { setsymbolAllowed((prev) => !prev) }}
            />
            <label htmlFor="symbol">Symbol</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
