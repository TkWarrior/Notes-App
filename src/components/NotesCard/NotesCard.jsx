import React from 'react'
import { useNotes } from '../../context/NotesContext';
import { findNotesInArchive } from '../../utils/findNotesInArchives';
function NotesCard({note}) {
    const {id , title , text , isPinned } = note
    const {archive,notesDispatch} = useNotes()
    const onPinClick = (id) =>{
        // if the note is pinned than  isPinned value becomes true by dafault isPinned value is false
        !isPinned ? notesDispatch({
            type:"PIN_NOTES",
            payload: {id}
        }): notesDispatch({
            type:"UNPIN_NOTES",
            payload: {id}
        })
    }

   
    const isNotesInArchive = findNotesInArchive(id,archive)

    const onArchiveClick = (id) => {
        !isNotesInArchive ? notesDispatch({
              type: "ADD_TO_ARCHIVE",
              payload: { id },
            }) : notesDispatch({
                type: "REMOVE_FROM_ARCHIVE",
                payload : {id}
            })
       
    }
   

  return (
    <div className="bg-white shadow-md rounded-xl p-4 relative hover:shadow-xl transition-shadow">
        {!isNotesInArchive?<button
        className="absolute top-3 right-3  hover:text-yellow-500"
        onClick={() => onPinClick(id)}
      >
        <span
          className={isPinned ? `material-icons` : `material-icons-outlined`}
          title="pin"
        >
          push_pin
        </span>
      </button> : <></>}
      
      <h2 className="text-lg font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 whitespace-pre-line">{text}</p>

      <div className="flex justify-end gap-3 mt-4">
        <button title="Delete Note" className="hover:text-red-500">
          <span className="material-icons-outlined" title="Delete">
            delete
          </span>
        </button>
        <button
          title="Archive Note"
          className="hover:text-gray-600"
          onClick={() => onArchiveClick(id)}
        >
          <span
            className={
              isNotesInArchive
                ? "material-icons"
                : "material-icons-outlined"
            }
            title="Archive"
          >
            archive
          </span>
        </button>
        <button title="Label Note" className="hover:text-blue-500">
          <span className="material-icons-outlined" title="Important">
            label
          </span>
        </button>
      </div>
    </div>
  );
}

export default NotesCard