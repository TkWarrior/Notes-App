export const findNotesInBin = (id , bin) => {
    return bin.some((note) => note.id === id);
};