import { useAppSelector } from "../app/hooks";
import { selectCurrentNote } from "../features/notesSlice";
import type { Note } from "../types/note";

const NoteActive = () => {
    const note: Note | null = useAppSelector(selectCurrentNote);
    return (
        <div className="bg-[#1E1A1A] w-[619px] relative flex justify-center items-center flex-col gap-9 py-12 rounded-[10px] shadow-sm shadow-neutral-700">

        </div>
    )
}

export default NoteActive;