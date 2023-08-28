import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addGallary } from "../reducer/AlbumSlice";

interface propsType {
    getId: string | undefined
    setAdded: React.Dispatch<React.SetStateAction<boolean>>
    setCreateImg: React.Dispatch<React.SetStateAction<boolean>>
}
function CreateImage({ getId, setCreateImg, setAdded }: propsType) {
    const [img, setImg] = useState<string>("");
    const [msg, setMsg] = useState(false);
    const dispatch = useDispatch();

    function handelSubmit() {
        if (img.trim() === "" || img.trim().length < 10) {
            setMsg(true);
        }
        else {
            dispatch(addGallary({
                folderId: getId,
                id: new Date().getSeconds().toString(),
                img: img
            }))
            setMsg(false);
            setCreateImg(false);
            setAdded(true);
            setImg("");
        }
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            setMsg(false);
        }, 2000);
        return (() => {
            clearTimeout(timer);
        })
    })
    return (
        <div className="w-full md:w-[400px] h-auto p-5 rounded-md shadow-md bg-white myCustom">
            {msg ? <p className='w-full bg-red-300 text-white text-md font-sans text-center p-1 mb-2 rounded-md'>{!img.length ? "Please add image URL first" : "Please add a valid image URL"}</p> : null}
            <h2 className="text-center mb-3 font-serif font-bold text-lg text-purple-600">Add an image</h2>
            <div className="w-full justify-center items-center flex flex-col space-y-3">
                <input type="url" placeholder="Add image url" className="w-full p-2 border-2 border-slate-300 focus:border-slate-300 rounded-md" value={img} onChange={(e) => setImg(e.target.value)} />
                <div className="flex space-x-3">
                    <button className="px-4 py-1 bg-purple-600 rounded-md font-serif hover:bg-purple-900 transition duration-600 text-white text-sm" onClick={() => setCreateImg(false)}>Cancel</button>
                    <button className="px-4 py-1 bg-purple-600 rounded-md font-serif hover:bg-purple-900 transition duration-600 text-white text-sm" onClick={handelSubmit}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default CreateImage;