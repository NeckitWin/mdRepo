import type { Note } from "../types/note";

const NoteItem = ({ note }: { note: Note }) => {
    return (
        <div key={note.id} className="bg-[#252525] p-4 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg text-[#ECE7F6] font-semibold">{note.title}</h4>
                <span className="text-sm text-[#A3A3A3]">{note.date}</span>
            </div>
            <p className="text-[#A3A3A3] mb-3 line-clamp-2">{note.content}</p>
            <div className="flex gap-2 flex-wrap">
                {note.tags.map((tag, index) => (
                    <span key={index} className="bg-neutral-600 text-[#ECE7F6] px-2 py-1 rounded-full text-xs">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default NoteItem;