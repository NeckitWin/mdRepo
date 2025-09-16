import { useState } from "react";
import type { Note } from "../lib/types";
import { useAppDispatch } from "../app/hooks";
import { deleteNote, editNote, setCurrentNoteId } from "../features/notesSlice";

const NoteCard = ({ note }: {note: Note}) => {
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editedNote, setEditedNote] = useState<Note>(note);

    const addTag = (tag: string) => {
        if (!editedNote.tags.includes(tag)) {
            setEditedNote({ ...editedNote, tags: [...editedNote.tags, tag] });
        }
    }

    const removeTag = (tag: string) => {
        setEditedNote({ ...editedNote, tags: editedNote.tags.filter(t => t !== tag) });
    }

    const saveChanges = () => {
        dispatch(editNote(editedNote));
        setEditMode(false);
    }

    return (
        <div className="bg-[#252525] p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 transition flex flex-row" onClick={() => dispatch(setCurrentNoteId(note.id))}>
            <div className="w-full">
                <div className="flex justify-between items-start mb-2">
                    {editMode ? <input type="text" value={editedNote.title} onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })} className="bg-neutral-700 text-white p-2 rounded" /> :
                        <h4 className="text-lg text-[#ECE7F6] font-semibold">{editedNote.title}</h4>}
                </div>
                {editMode ? <textarea className="w-full h-20 mb-3 p-2 rounded bg-neutral-700 text-white" value={editedNote.content} onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}></textarea> :
                    <p className="text-[#A3A3A3] mb-3 line-clamp-2">{editedNote.content}</p>}
                <div className="flex gap-2 flex-wrap">
                    {editedNote.tags.map((tag, index) => (
                        <span key={index} className={"bg-neutral-600 text-[#ECE7F6] px-2 py-1 rounded-full text-xs" + (editMode ? " cursor-not-allowed" : "")} onClick={() => editMode && removeTag(tag)} title={editMode ? "Click to remove tag" : ""}>
                            {tag}
                        </span>
                    ))}
                    {editMode && (
                        <button className="bg-neutral-600 text-[#ECE7F6] px-2 py-1 rounded-full text-xs cursor-pointer" onClick={() => {
                            const newTag = prompt("Enter new tag name:");
                            if (newTag) {
                                addTag(newTag);
                            }
                        }}>+ Add Tag</button>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-end gap-3 w-64">
                <span className="text-sm text-[#A3A3A3]">{note.date}</span>
                { editMode ?
                    <button title="Save changes" className="text-white/50 cursor-pointer" onClick={saveChanges}><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 640 640"><path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134" /></svg></button>
                :
                    <button title="Edit note" className="text-white/50 cursor-pointer" onClick={() => setEditMode(!editMode)}><svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" /></svg></button>
}
                <button title="Delete note" className="text-white/50 cursor-pointer" onClick={()=>dispatch(deleteNote(note.id))}><svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" /></svg></button>
            </div>
        </div>
    )
}

export default NoteCard;