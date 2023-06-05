"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";

export function TopNav({ children }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;


  // toggle button //

  // const switchToggle = document.querySelector('#switch-toggle');

  const [switchToggle, setSwitchToggle] = useState(null);

useEffect(() => {
setSwitchToggle(document.querySelector('#switch-toggle'))
}, [switchToggle]);

let isDarkmode = false

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`

function toggleTheme (){
  isDarkmode = !isDarkmode
  localStorage.setItem('isDarkmode', isDarkmode)
  switchTheme()

}

function switchTheme (){

  theme == "dark" ? setTheme('light') : setTheme("dark")


  if (theme !== "dark") {
    switchToggle.classList.remove('bg-yellow-500','-translate-x-2')
    switchToggle.classList.add('bg-gray-700','translate-x-full')
    setTimeout(() => {
      switchToggle.innerHTML = darkIcon
    }, 250);
  } else {
    switchToggle.classList.add('bg-yellow-500','-translate-x-2')
    switchToggle.classList.remove('bg-gray-700','translate-x-full')
    setTimeout(() => {
      switchToggle.innerHTML = lightIcon
    }, 250);
  }
}





  return (
    <nav>
      <div className='flex items-center justify-between' style={{width: "15%"}}>
        <Link href="/" className="flex">
          Home
        </Link>

    <button 
    className="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
    onClick={toggleTheme}>
    <div
        id="switch-toggle"
        className="w-6 h-6 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    </div>
</button>


        {/* <label className="relative inline-flex items-center cursor-pointer" 
        >
  <input type="checkbox" value="" className="sr-only peer" 
         /> 
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

</label> */}

        {/* <button
         onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
          className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg'>
          Toggle Mode
        </button> */}
      </div>

      <section>{children}</section>
      <style jsx>
        {`
          nav {
            top: 0;
            position: fixed;
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 2rem;
            background: white;
            border-bottom: 1px solid var(--border-color);
          }
          nav :global(a) {
            text-decoration: none;
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
        `}
      </style>
    </nav>
  );
}
