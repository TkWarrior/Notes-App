import React from 'react'
import { useNotes } from '../../context/NotesContext';
import NotesCard from '../../components/NotesCard/NotesCard';
import Sidebar from '../../components/SideBar/Sidebar';
function Archive() {
  const {archive} = useNotes();
  console.log(archive)
 
  return (
    <div>
      <main className="flex gap-2 p-3">
        <Sidebar />
        <div className="w-full">
          {archive.length > 0 && (
            <h1 className="font-bold text-3xl text-center text-indigo-600 p-5 m-5"> Archived Notes</h1>
          )}
          <div className=''>
            {
              <div className="grid gap-2 sm:grid-cols-4 ">
                {archive?.length > 0 &&
                  archive.map((note) => (
                    <NotesCard key={note.id} note={note} />
                  ))}
              </div>
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default Archive