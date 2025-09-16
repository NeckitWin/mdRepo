import { useState } from "react";
import type { User } from "../lib/types";

const Profile = () => {

    const [user, setUser] = useState<User>({
        username: "NeckitWin",
        avatar: "https://images.unsplash.com/photo-1622932720890-15cdc9364a55",
        details: [
            { label: "AGE", value: "21" },
            { label: "EDUCATION", value: "Programmer" },
            { label: "STATUS", value: "Single" },
            { label: "LOCATION", value: "Poland" },
            { label: "HOBBIES", value: "Programming, Gaming" }
        ]
    });
    const [tempUser, setTempUser] = useState<User>(user);

    const [editMode, setEditMode] = useState(false);

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempUser(prev => ({ ...prev, username: e.target.value }));
    }

    const changeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempUser(prev => ({ ...prev, avatar: e.target.value }));
    }

    const changeDetail = (index: number, field: "label" | "value", value: string) => {
        setTempUser(prev => {
            const newDetails = [...prev.details];
            newDetails[index] = { ...newDetails[index], [field]: value };
            return { ...prev, details: newDetails };
        });
    }

    const deleteDetail = (index: number) => {
        setTempUser(prev => {
            const newDetails = prev.details.filter((_, i) => i !== index);
            return { ...prev, details: newDetails };
        });
    }

    const addDetail = () => {
        setTempUser(prev => ({
            ...prev,
            details: [...prev.details, { label: "", value: "" }]
        }));
    }

    const saveProfile = () => {
        setEditMode(false);
        setUser(tempUser);
    }
    const declineEditMode = () => {
        setEditMode(false);
        setTempUser(user);
    }

    return (
        <section className="group bg-[#1E1A1A] w-[619px] relative flex justify-center items-center flex-col gap-9 py-12 rounded-[10px] shadow-sm shadow-neutral-700">
            <div className="absolute right-4 top-4 flex gap-2">
                {editMode ? <>
                    <button onClick={saveProfile} className="cursor-pointer w-6 h-6 duration-200 fill-white/20 hover:fill-white/50" title={editMode ? "Save Profile" : "Edit Profile"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134" /></svg>
                    </button>
                    <button onClick={declineEditMode} className="cursor-pointer w-6 h-6 duration-200 fill-white/20 hover:fill-white/50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4" /></svg></button>
                </> : <button onClick={() => setEditMode(true)} className="cursor-pointer w-6 h-6 duration-200 transition opacity-0 group-hover:fill-white/25 group-hover:opacity-100 hover:fill-white/50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9" /></svg></button>
                }</div>
            {editMode ? <input type="text" value={tempUser.username} onChange={changeUsername} className="text-4xl text-[#ECE7F6] font-extrabold border-b text-center border-white focus:outline-none" /> : <h2 className="text-5xl text-[#ECE7F6] font-extrabold">{user.username}</h2>}
            <img className="w-[409px] h-[409px] rounded-full object-cover" src={user.avatar} alt="profile picture" />
            {editMode && <input type="text" value={tempUser.avatar} onChange={changeAvatar} className="text-xl w-96 text-[#ECE7F6] font-extrabold border-b text-center border-white focus:outline-none" />}
            <ul className="flex flex-col gap-4">
                {(editMode ? tempUser : user).details.map((detail, index) => {
                    return editMode ? (
                        <li key={index} className="flex gap-2 items-center">
                            <input onChange={(e)=>changeDetail(index, "label", e.target.value)} className="font-semibold text-[#A3A3A3] text-2xl w-[193px] border-b border-white focus:outline-none" value={detail.label} />
                            <input onChange={(e)=>changeDetail(index, "value", e.target.value)} type="text" value={detail.value} className="text-2xl text-[#EAEBF6] bg-transparent border-b border-white focus:outline-none" />
                            <button onClick={()=>deleteDetail(index)} className="w-6 h-6 duration-200 fill-white/20 hover:fill-white/50 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" /></svg>
                            </button>
                        </li>
                    ) : (
                        <li key={index} className="flex gap-2 items-center">
                            <span className="font-semibold text-[#A3A3A3] text-2xl w-[193px]">{detail.label}</span>
                            <span className="text-2xl text-[#EAEBF6]">{detail.value}</span>
                        </li>
                    )
                })}
                {editMode && <li>
                    <button className="cursor-pointer transition w-full text-neutral-200 hover:text-neutral-400" onClick={addDetail}>
                        Add Detail
                    </button>
                </li>}
            </ul>
        </section>
    )
}

export default Profile;