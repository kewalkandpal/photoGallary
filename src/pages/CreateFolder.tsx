import { useEffect, useState } from 'react';
import { addAlbum } from '../reducer/AlbumSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateFolder() {
    const [folder, setFolder] = useState<string>("");
    const [msg, setMsg] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handelSubmit() {
        if (folder.trim() === "" || folder.trim().length < 3) {
            setMsg(true);
        } else {
            dispatch(addAlbum({
                id: new Date().getSeconds().toString(), folder
            }))
            setMsg(false);
            navigate("/")
            setFolder("");
        }
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setMsg(false);
        }, 2000);
        return (() => {
            clearTimeout(timer);
        })
    }, [msg])

    return (
        <div className="w-full flex justify-center items-center flex-col">
            {msg ? <p className='w-full bg-red-300 text-white text-md font-sans text-center p-1 mb-2'>{!folder.length ? "Please enter the folder name":"Use minimum 3 charachter"}</p> : null}
            <div className="sm:w-[500px] md:w-[600px] h-auto p-10 bg-white shadow-lg rounded-md mt-2">
                <h2 className="text-center mb-4 font-serif font-bold text-lg text-purple-600">Create a folder</h2>
                <div className="w-full justify-center items-center flex flex-col space-y-3">
                    <input type="text" placeholder="Add folder name" className="w-full md:w-[500px] p-2 border-2 border-slate-300 focus:border-slate-300 rounded-md" value={folder} onChange={(e) => setFolder(e.target.value)} />
                    <div className='flex space-x-3'>
                        <button className="px-4 py-1 bg-purple-600 rounded-md font-serif hover:bg-purple-900 transition duration-600 text-white text-sm" onClick={() => navigate("/")}>Cancel</button>
                        <button className="px-4 py-1 bg-purple-600 rounded-md font-serif hover:bg-purple-900 transition duration-600 text-white text-sm" onClick={handelSubmit}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateFolder;