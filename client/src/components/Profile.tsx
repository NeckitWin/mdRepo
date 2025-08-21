import { useState } from "react";
import type { User } from "../types/user";

const Profile = () => {

    const user: User = {
        username: "NeckitWin",
        avatar: "https://images.unsplash.com/photo-1622932720890-15cdc9364a55",
        details: [
            { label: "AGE", value: "21" },
            { label: "EDUCATION", value: "Programmer" },
            { label: "Status", value: "Single" },
            { label: "Location", value: "Poland" },
            { label: "Hobbies", value: "Programming, Gaming" }
        ]
    };

    const [editMode, setEditMode] = useState(false);
    const editUser = () => {
        setEditMode(!editMode);
    }

    return (
        <section className="bg-[#1E1A1A] w-[619px] relative flex justify-center items-center flex-col gap-9 py-12 rounded-[10px] shadow-sm shadow-neutral-700">
            <button className="absolute right-4 top-4 cursor-pointer w-6 h-6 duration-200 fill-white/20 hover:fill-white/50" onClick={editUser} title="Edit Profile">
                {editMode ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9" /></svg>}
            </button>
            {editMode ? <input type="text" value={user.username}  className="text-3xl text-[#ECE7F6] font-extrabold border-b text-center border-white" /> : <h2 className="text-5xl text-[#ECE7F6] font-extrabold">{user.username}</h2>}
            <img className="w-[409px] h-[409px] rounded-full object-cover" src={user.avatar} alt="profile picture" />
            <ul className="flex flex-col gap-4">
                {user.details.map((detail, index) => (
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