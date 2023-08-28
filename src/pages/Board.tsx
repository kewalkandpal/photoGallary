import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFolder } from "../reducer/AlbumSlice";

type folderType = {
    id: string,
    folder: string,
}
function Board() {
    const dispatch = useDispatch();
    const data = useSelector((folder: any) => folder.albumStore?.folder);
    if (!data.length) {
        return (
            <div className="mt-5 underline font-serif text-purple-600 text-md font-bold">There is no folder</div>
        )
    }
    return (
        <div className="mt-10 mb-10 w-[80vw] flex justify-center items-center">
            <div className="w-full mx-5 h-auto px-10 bg-gray-200 py-2 flex md:justify-start items-center flex-wrap rounded-md">
                {
                    data?.map((cur: folderType) => {
                        return (
                            <div className="mx-1 my-1 text-sm text-center rounded-md overflow-hidden" key={cur.id}><Link to={`/gallary/${cur.folder}/${cur.id}`}><p className="w-full px-3 py-1 cursor-pointer bg-black text-white hover:bg-white hover:text-purple-700 transition duration-600">📁 {cur.folder}</p></Link><p className="w-full px-3 py-1 cursor-pointer bg-red-300 hover:bg-red-400 transition duration-600" onClick={() => dispatch(deleteFolder(cur.id))}>❌</p></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Board;