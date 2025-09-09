import type { Note } from "../types/note";
import NoteItem from "./NoteItem";

interface NoteListProps {
    notesList: Note[];
    deleteNote: (id: string) => void;
}

const NoteList = ({ notesList, deleteNote }: NoteListProps) => {
    return (
        <section className="bg-[#1E1A1A] rounded-[10px] shadow-sm shadow-neutral-700 p-6">
            <ul className="space-y-4 h-[700px] overflow-y-auto">
                {notesList.map((note) => (
                    <li key={note.id} >
                        <NoteItem note={note} deleteNote={deleteNote} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default NoteList;