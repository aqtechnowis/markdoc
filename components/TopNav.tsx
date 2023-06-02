"use client"
import React from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";

export function TopNav({ children }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav>
      <div className='flex items-center justify-between' style={{width: "15%"}}>
        <Link href="/" className="flex">
          Home
        </Link>
        <label className="relative inline-flex items-center cursor-pointer" 
        >
  <input type="checkbox" value="" className="sr-only peer" 
         onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} /> 
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

</label>

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
