import type { Note } from "../types/note";
import NoteItem from "./NoteItem";

const NoteList = () => {
    const notesList: Note[] = [
        {
            id: 1,
            title: "Example Note",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum exercitationem repellat, voluptatem laboriosam at corrupti commodi nesciunt quia voluptates vitae, officia iste saepe explicabo aliquid maxime omnis, excepturi qui. Reprehenderit exercitationem distinctio vero nemo neque minima consequuntur nulla sequi quidem a enim sed, incidunt quod accusamus voluptas nihil ipsa magnam velit sapiente nesciunt, dicta soluta illum commodi. Consequuntur, magnam.",
            date: "2025-08-20",
            tags: ["Test", "Test2", "Test3"]
        }
    ];

    return (
        <section className="bg-[#1E1A1A] rounded-[10px] shadow-sm shadow-neutral-700 p-6">
            <ul className="space-y-4 h-[700px] overflow-y-auto">
                {notesList.map((note) => (
                    <li key={note.id} >
                        <NoteItem note={note} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default NoteList;