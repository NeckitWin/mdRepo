import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearCurrentNoteId, selectCurrentNote, selectEditNoteMode, setEditNoteMode } from "../features/notesSlice";
import type { Note } from "../lib/types";
import NoteEdit, { type NoteEditRef } from "../components/NoteEdit";
import NoteView from "../components/NoteView";
import { Icons } from "../ui/icons";
import { useRef } from "react";

const NoteActive = () => {
    const dispatch = useAppDispatch();
    const editMode = useAppSelector(selectEditNoteMode);
    const note: Note | null = useAppSelector(selectCurrentNote);
    const noteEditRef = useRef<NoteEditRef>(null);

    const handleCancelEdit = () => {
        noteEditRef.current?.cancelChanges();
        dispatch(setEditNoteMode(false));
    };

    const handleSaveEdit = () => {
        noteEditRef.current?.saveChanges();
        dispatch(setEditNoteMode(false));
    };
    return (
        <div className="bg-[#1E1A1A] relative w-full p-6 rounded-[10px] shadow-sm shadow-neutral-700 text-white">
            <div className="absolute top-4 right-4 flex gap-2">
                {editMode ? (
                    <>
                        <button 
                            onClick={handleSaveEdit}
                            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
                            title="Save changes"
                        >
                            <Icons.Save className="w-4 h-4 fill-current" />
                            Save
                        </button>
                        <button 
                            onClick={handleCancelEdit}
                            className="flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors text-sm"
                            title="Cancel changes"
                        >
                            <Icons.Close className="w-4 h-4 fill-current" />
                            Cancel
                        </button>
                    </>
                ) : (
                    <button 
                        onClick={() => dispatch(setEditNoteMode(true))}
                        className="flex items-center gap-2 px-3 py-1.5 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 rounded-md transition-colors text-sm"
                        title="Edit note"
                    >
                        <Icons.Edit className="w-4 h-4 fill-current" />
                        Edit
                    </button>
                )}
                <button 
                    onClick={() => dispatch(clearCurrentNoteId())}
                    className="flex items-center gap-2 px-3 py-1.5 bg-neutral-700 hover:bg-neutral-600 text-neutral-200 rounded-md transition-colors text-sm"
                    title="Close note"
                >
                    <Icons.Close className="w-4 h-4 fill-current" />
                    Close
                </button>
            </div>
            <div>
                {note ? 
                    (editMode ? <NoteEdit ref={noteEditRef} /> : <NoteView note={note} />) 
                    : 
                    (<p className="text-red-700 font-bold text-2xl text-center">Note does not exist</p>)
                }
            </div>
        </div>
    )
}

export default NoteActive;