import { useAppSelector } from "../app/hooks";
import { selectCurrentNote, selectEditNoteMode } from "../features/notesSlice";
import type { Note } from "../types/note";
import NoteEdit from "./NoteEdit";
import NoteView from "./NoteView";

const NoteActive = () => {
    const note: Note | null = useAppSelector(selectCurrentNote);
    const editMode = useAppSelector(selectEditNoteMode);
    return (
        <div className="bg-[#1E1A1A] w-[619px] relative flex flex-col py-12 rounded-[10px] shadow-sm shadow-neutral-700">
            {
                note ?
                        (editMode ? <NoteEdit /> : <NoteView />)
                        :
                        <>
                        Note does not exist
                        </>
            }
        </div>
    )
}

export default NoteActive;