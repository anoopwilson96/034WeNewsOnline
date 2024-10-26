import React from 'react'

export default function Header() {
  return (
    <>
    <>
  <header className=" bg-stone-100">
    <section className=" headerOne pt-5 bg-stone-100 flex flex-row align-middle justify-center">
      <img src="../logo.png" alt="logo" />
    </section>
    <section className="headerTwo p-4  flex flex-row align-middle justify-evenly bg-stone-100">
      <nav>
        <ul className="flex flex-row align-middle justify-around gap-10 text-wrap text-lg">
        <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Country</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>India</a></li>
    <li><a>Canada</a></li>
    <li><a>USA</a></li>
  </ul>
</div>
        
          <li className="hidden sm:block md:block">Sports</li>
          <li className="hidden sm:block md:block">Tech</li>
          <li className="hidden sm:block md:block">Movies</li>
        </ul>
      </nav>
      <div className="sectionOne flex flex-row align-middle justify-center">
        <h1 className="animate-pulse mt-5 mainHeading font-mono text-xl font-bold mb-8">
          Hot news at your fingertip
        </h1>
      </div>
    </section>
  </header>

</>


    
    </>
  )
}
