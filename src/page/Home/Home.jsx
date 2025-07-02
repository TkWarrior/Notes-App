import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import NotesCard from "../../components/NotesCard/NotesCard";
import { useNotes } from "../../context/NotesContext";
import Archive from "../Archive/Archive";

function Home() {
  
  const { title, text, notes,archive, notesDispatch } = useNotes();
  console.log(notes);
  console.log("archive", archive);
  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTES",
    });
  };
  
  const pinnedNotes = notes?.length>0 && notes.filter(({isPinned}) => isPinned )
  const unPinnedNotes = notes?.length>0 && notes.filter(({isPinned}) => !isPinned)

  console.log("pinned notes :",pinnedNotes);
  console.log("unpinned notes: ",unPinnedNotes);
  
  
  return (
    <div className=" ">
      
      <main className="flex gap-5 p-3">
        <Sidebar/>
        <div className="flex-1 ">
          {/* Note Input Card */}
          <div className="w-1/4 bg-white shadow-lg rounded-2xl p-6 m-auto relative">
            <input
              type="text"
              value={title}
              placeholder="Enter title"
              className="w-full text-2xl font-semibold border-none focus:outline-none mb-4"
              onChange={onTitleChange}
            />
            <textarea
              placeholder="Enter text"
              rows={5}
              value={text}
              className="w-full border-none focus:outline-none text-base resize-none"
              onChange={onTextChange}
            />
            <button
              onClick={onAddClick}
              disabled={title.trim().length === 0}
              className="absolute bottom-4 right-4 hover:scale-105 transition-transform"
              title="Add Note"
            >
              <span className="material-icons-outlined text-blue-600 text-4xl">
                add_circle
              </span>
            </button>
          </div>

          {/* Notes Grid */}
          <div className="mt-12">
            {pinnedNotes.length > 0 && <h3>Other Notes</h3>}

            {
              <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {unPinnedNotes?.length > 0 &&
                  unPinnedNotes.map((note) => (
                    <NotesCard key={note.id} note={note} />
                  ))}
              </div>
            }

            {pinnedNotes.length > 0 && (
              <div>
                <h3>Pinned Notes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map((note) => (
                      <NotesCard key={note.id} note={note} />
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
