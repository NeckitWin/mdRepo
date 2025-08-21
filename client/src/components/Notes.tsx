const Notes = () => {
    const notesList = [
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
            <div className="space-y-4 h-[700px] overflow-y-auto">
                {notesList.map((note) => (
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
                ))}
            </div>
        </section>
    )
}

export default Notes;