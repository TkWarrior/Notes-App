import React from 'react'
import { NavLink } from 'react-router'
function Sidebar() {
  const getStyle = ({isActive}) =>{
      const style = "flex p-2 gap-2 hover:bg-indigo-600 rounded-r-full mt-4";
      return isActive ? `bg-indigo-600 text-white ${style} ` : `${style}`;     
  }

  return (
    <aside className="w-40  p-3 pr-0 bg-slate-100 shadow-md ">
    
        <NavLink className={getStyle} to="/">
          <span className="material-icons-outlined">home</span>
          <span>Home</span>
        </NavLink>
        <NavLink className={getStyle} to="/archive">
          <span className="material-icons-outlined">archive</span>
          <span>Archive</span>
        </NavLink>
        <NavLink className={getStyle} to="/important">
          <span className="material-icons-outlined">label</span>
          <span>Important</span>
        </NavLink>

        <NavLink className={getStyle} to="/bin">
          <span className="material-icons-outlined">delete</span>
          <span>Bin</span>
        </NavLink>
   
    </aside>
  );
}

export default Sidebar