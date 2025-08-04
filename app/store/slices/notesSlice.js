import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    // Example notes, replace with actual data fetching logic
    { id: 1, title: "Note 1", content: "Content of note 1" },
    { id: 2, title: "Note 2", content: "Content of note 2" },
    { id: 3, title: "Note 3", content: "Content of note 3" },
  ],
  searchQuery: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: Date.now(), // Use timestamp for unique ID
        title: action.payload.title,
        content: action.payload.content,
        createdAt: new Date().toISOString(),
      };
      state.notes.push(newNote);
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      const noteIndex = state.notes.findIndex((note) => note.id === id);
      if (noteIndex !== -1) {
        state.notes[noteIndex] = {
          ...state.notes[noteIndex],
          title,
          content,
          updatedAt: new Date().toISOString(),
        };
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchQuery = "";
    },
  },
});

export const { addNote, updateNote, deleteNote, setSearchQuery, clearSearch } =
  notesSlice.actions;
export default notesSlice.reducer;
