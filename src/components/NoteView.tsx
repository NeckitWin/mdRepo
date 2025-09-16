import type { Note } from "../lib/types";

const NoteView = ({note}: {note: Note}) => {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <ul>
                {note.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default NoteView;