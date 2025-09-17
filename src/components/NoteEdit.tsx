import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { editNote, selectCurrentNote } from "../features/notesSlice";
import type { Note } from "../lib/types";
import { Icons } from "../ui/icons";

export interface NoteEditRef {
    cancelChanges: () => void;
    saveChanges: () => void;
}

const NoteEdit = forwardRef<NoteEditRef>((_, ref) => {
    const dispatch = useAppDispatch();
    const currentNote = useAppSelector(selectCurrentNote);
    const [editedNote, setEditedNote] = useState<Note>({
        id: '',
        title: '',
        content: '',
        date: '',
        tags: []
    });
    const [originalNote, setOriginalNote] = useState<Note | null>(null);

    useEffect(() => {
        if (currentNote) {
            setEditedNote(currentNote);
            setOriginalNote(currentNote);
        }
    }, [currentNote]);

    const saveChanges = () => {
        if (editedNote.id && editedNote.title.trim()) {
            dispatch(editNote(editedNote));
        }
    };

    const cancelChanges = () => {
        if (originalNote) {
            setEditedNote(originalNote);
        }
    };

    useImperativeHandle(ref, () => ({
        cancelChanges,
        saveChanges
    }));

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedNote(prev => ({ ...prev, title: e.target.value }));
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedNote(prev => ({ ...prev, content: e.target.value }));
    };

    const addTag = () => {
        const newTag = prompt("Enter new tag name:");
        if (newTag && newTag.trim() && !editedNote.tags.includes(newTag.trim())) {
            setEditedNote(prev => ({ 
                ...prev, 
                tags: [...prev.tags, newTag.trim()] 
            }));
        }
    };

    const removeTag = (tagToRemove: string) => {
        setEditedNote(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    if (!currentNote) {
        return (
            <div className="flex items-center justify-center h-full text-neutral-400">
                <p>No note selected for editing</p>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col">
            <div className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-300">
                        Title
                    </label>
                    <input
                        type="text"
                        value={editedNote.title}
                        onChange={handleTitleChange}
                        className="w-full px-3 py-2 bg-neutral-700 text-white border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter note title..."
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-neutral-300">
                            Tags
                        </label>
                        <button
                            onClick={addTag}
                            className="flex items-center gap-1 px-2 py-1 text-xs bg-neutral-700 hover:bg-neutral-600 text-white rounded transition-colors"
                        >
                            <Icons.Plus className="w-3 h-3 fill-current" />
                            Add Tag
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {editedNote.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-xs text-white rounded-full"
                            >
                                {tag}
                                <button
                                    onClick={() => removeTag(tag)}
                                    className="hover:bg-blue-700 rounded-full p-0.5 transition-colors"
                                >
                                    <Icons.Close className="w-3 h-3 fill-current" />
                                </button>
                            </span>
                        ))}
                        {editedNote.tags.length === 0 && (
                            <span className="text-neutral-500 text-sm">No tags</span>
                        )}
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <label className="block text-sm font-medium mb-2 text-neutral-300">
                        Content
                    </label>
                    <textarea
                        value={editedNote.content}
                        onChange={handleContentChange}
                        className="w-full h-96 px-3 py-2 bg-neutral-700 text-white border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Enter your note content..."
                    />
                </div>

                <div className="text-xs text-neutral-400">
                    Created: {editedNote.date}
                </div>
            </div>
        </div>
    );
});

export default NoteEdit;