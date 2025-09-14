import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note } from "../types/note";
import type { RootState } from "../app/store";

const initialState: Note[] = [
    {
        id: "1",
        title: "Example Note",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum exercitationem repellat, voluptatem laboriosam at corrupti commodi nesciunt quia voluptates vitae, officia iste saepe explicabo aliquid maxime omnis, excepturi qui. Reprehenderit exercitationem distinctio vero nemo neque minima consequuntur nulla sequi quidem a enim sed, incidunt quod accusamus voluptas nihil ipsa magnam velit sapiente nesciunt, dicta soluta illum commodi. Consequuntur, magnam.",
        date: "2025-08-20",
        tags: ["Test", "Test2", "Test3"]
    }
];

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state) => {
            const newNote: Note = {
                id: crypto.randomUUID(),
                title: "New Note",
                content: "",
                date: new Date().toISOString().split("T")[0],
                tags: []
            };
            state.push(newNote);
        },

        deleteAllNotes: (state) => {
            state.length = 0;
        },

        deleteNote: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const index = state.findIndex(note => note.id === id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

        editNote: (state, action: PayloadAction<Note>) => {
            const updatedNote = action.payload;
            const index = state.findIndex(note => note.id === updatedNote.id);
            if (index !== -1) {
                state[index] = updatedNote;
            }
        },
    }
});

export const { addNote, deleteAllNotes, deleteNote, editNote } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes;
export default notesSlice.reducer;