export const findNotesInImportant = (id , important) => {
        return important.some((note) => note.id===id)
}