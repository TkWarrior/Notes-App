import React from 'react'

function Navbar() {
  return (
    <>
      <header className="flex h-20 bg-slate-100 shadow-md">
        <div className="flex m-auto  text-center text-3xl gap-2 h-15">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.7HCYUPUZop8T1DF2pKne9wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            height={50}
            width={50}
          />
          <p className="text-indigo-600 font-bold">Notes Daily</p>
        </div>
      </header>
    </>
  );
}

export default Navbar