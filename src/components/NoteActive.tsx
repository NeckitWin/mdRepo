import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearCurrentNoteId, selectCurrentNote, selectEditNoteMode, setCurrentNoteId, setEditNoteMode } from "../features/notesSlice";
import type { Note } from "../types/note";
import NoteEdit from "./NoteEdit";
import NoteView from "./NoteView";

const NoteActive = () => {
    const dispatch = useAppDispatch();
    const editMode = useAppSelector(selectEditNoteMode);
    const note: Note | null = useAppSelector(selectCurrentNote);
    return (
        <div className="bg-[#1E1A1A] relative w-full p-6 rounded-[10px] shadow-sm shadow-neutral-700 text-white">
            <div className="absolute top-2 right-4 flex gap-2">
                {editMode ?
                <button onClick={()=>dispatch(setEditNoteMode(false))}>save</button> :
                <button onClick={()=>dispatch(setEditNoteMode(true))}>edit</button>
                }
                <button onClick={()=>dispatch(clearCurrentNoteId())}>close</button>
            </div>
            {
                note ?
                    (editMode ? <NoteEdit /> : <NoteView note={note} />)
                    :
                    (
                        <p className="text-red-700 font-bold text-2xl text-center">Note does not exist</p>
                    )
            }
        </div>
    )
}

export default NoteActive;