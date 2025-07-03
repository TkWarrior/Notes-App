import React from 'react'
import { useNotes } from '../../context/NotesContext';
import Sidebar from '../../components/SideBar/Sidebar';
import NotesCard from '../../components/NotesCard/NotesCard';

function Important() {
    const {important} = useNotes();

  return (
    <div>
      <main className="flex gap-2 p-3">
        <Sidebar />
        <div className="w-full">
          {important.length > 0 && (
            <h1 className="font-bold text-3xl text-center"> Archived Notes</h1>
          )}
          <div className="h-full">
            {
              <div className="grid justify-center gap-2 sm:grid-cols-4 ">
                {important?.length > 0 &&
                  important.map((note) => (
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

export default Important