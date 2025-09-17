import type { Note } from "../lib/types";

const NoteView = ({note}: {note: Note}) => {
    return (
        <div className="h-full flex flex-col text-white">
            <div className="">
                <h1 className="text-3xl font-bold text-white mb-2 break-words">
                    {note.title || "Untitled Note"}
                </h1>
            </div>

            <div className="flex-1">
                <h3 className="text-sm font-medium text-neutral-300 mb-3">Content</h3>
                <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
                    {note.content ? (
                        <div className="prose prose-invert max-w-none">
                            <pre className="whitespace-pre-wrap font-sans text-neutral-200 leading-relaxed text-sm">
                                {note.content}
                            </pre>
                        </div>
                    ) : (
                        <p className="text-neutral-500 italic text-sm">No content yet...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NoteView;