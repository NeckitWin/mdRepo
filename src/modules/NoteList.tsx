import { useAppSelector } from "../app/hooks";
import { selectNotes } from "../features/notesSlice";
import NoteCard from "../components/NoteCard";

const NoteList = () => {
    const notes = useAppSelector(selectNotes);

    return (
        <section className="bg-[#1E1A1A] rounded-[10px] shadow-sm shadow-neutral-700 p-6">
            <ul className="space-y-4 h-[700px] overflow-y-auto">
                {notes.map((note) => (
                    <li key={note.id} >
                        <NoteCard note={note} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default NoteList;