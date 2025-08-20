const Profile = () => {
    const userDetails = [
        { label: "AGE", value: "21" },
        { label: "EDUCATION", value: "Programmer" },
        { label: "Status", value: "Single" },
        { label: "Location", value: "Poland" },
        { label: "Hobbies", value: "Programming, Gaming" }
    ];

    return (
        <section className="bg-[#1E1A1A] w-[619px] flex justify-center items-center flex-col gap-9 py-12 rounded-[10px]">
            <h2 className="text-5xl text-[#ECE7F6] font-extrabold">NeckitWin</h2>
            <img  className="w-[409px] h-[409px] rounded-full object-cover" src="https://images.unsplash.com/photo-1622932720890-15cdc9364a55?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0" alt="profile picture" />
            <ul className="flex flex-col gap-4">
                 {userDetails.map((detail, index) => (
                    <li key={index} className="flex gap-2 items-center">
                        <span className="font-semibold text-[#A3A3A3] text-2xl w-[193px]">{detail.label}</span>
                        <span className="text-2xl text-[#EAEBF6]">{detail.value}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Profile;