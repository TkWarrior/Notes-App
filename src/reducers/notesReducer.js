import { v4 as uuid } from "uuid";

export const notesReducer = (state, { type, payload }) => {
  
  switch (type) {
    
    case "TITLE": {
      return { ...state, title: payload };
    }

    case "TEXT": {
      return { ...state, text: payload };
    }

    case "ADD_NOTES": {
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: state.title, text: state.text, id: uuid(), isPinned: false },
        ],
      };
    }

    case "PIN_NOTES": {
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    }
    case "UNPIN_NOTES": {
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    }

    case "ADD_TO_ARCHIVE": {
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id)],
        notes: state.notes.filter(({ id }) => id !== payload.id)
      }
    }
   
    case "REMOVE_FROM_ARCHIVE":{
      return {
        ...state,
        //archive ke notes ko notes array mein append kar denge
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === payload.id)],
          // after the we'll remove that notes from the archive
        archive: state.archive.filter(({id}) => id!== payload.id)
      };
       
        
    }
    default:
      state;
  }
};
