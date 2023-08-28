import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateImage from "./CreateImage";
import { useParams } from "react-router-dom";

type folderType = {
    folderId: string,
    id: string,
    img: string
}

function Gallary() {
    const id = useParams();    
    const getId: string | undefined = id.id;
    const fName = id.folder;
    const [createImg, setCreateImg] = useState<boolean>(false);
    const [slideImg, setSlideImg] = useState<number>(0);
    const [add, setAdded] = useState(false);
    const data = useSelector((album: any) => album.albumStore?.gallary);
    const filterImgByFolder = data?.filter((cur: folderType) => cur.folderId === getId);

    function handelSlideLeft() {
        if (slideImg >= 1) {
            setSlideImg((pre) => pre - 1);
        }
    }

    function handelSlideRight() {
        if (slideImg <= filterImgByFolder.length - 2) {
            setSlideImg((pre) => pre + 1);
        }
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            setAdded(false)
        }, 2000);
        return (() => {
            clearTimeout(timer)
        })
    })
    return (
        <div className="w-full h-auto flex justify-center items-center flex-col">
            {add ? <p className='w-full bg-red-300 text-white text-md font-sans text-center p-1 mb-2 rounded-md'>Image has been added successfully</p> : null}
            <button className="mt-3 mb-4 p-2 rounded-md font-serif bg-black text-md text-white hover:bg-white hover:text-purple-700 transition duration-600" onClick={() => setCreateImg(true)}>Add Image</button>
            <div className="mb-3 space-x-3"><span className="text-purple-600">Folder name: {fName}</span><span className="text-purple-600">Total images: {filterImgByFolder.length}</span></div>
            <div className="w-full flex justify-center items-center">
                <button className="text-4xl text-purple-600 shadow-lg hover:text-gray-700" onClick={handelSlideLeft}>{"<"}</button>
                <div className="w-[650px] h-60 mx-5 bg-gray-200 rounded-md shadow-lg relative overflow-hidden flex justify-center items-center">
                    {
                        filterImgByFolder.length ? filterImgByFolder?.map((cur: folderType, idx: number) => {
                            return (
                                <div className="absolute w-full h-full transition-all ease-linear duration-300" style={{ left: `${idx * 100}%`, transform: `translateX(${-(slideImg * 100)}%)` }} key={cur.id} >
                                    <img src={cur.img} alt={cur.img} className="w-full h-full object-cover" />
                                </div>
                            )
                        }) : <h2 className="text-md font-mono text-center text-purple-600">This folder doesn't have any images</h2>
                    }
                </div>
                <button className="text-4xl text-purple-600 shadow-lg hover:text-gray-700" onClick={handelSlideRight}>{">"}</button>
            </div>
            {createImg && <CreateImage setCreateImg={setCreateImg} getId={getId} setAdded={setAdded} />}
        </div>
    )
}

export default Gallary;