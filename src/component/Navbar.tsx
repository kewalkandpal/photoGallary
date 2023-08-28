import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="w-full  px-10 py-2 flex justify-between items-center bg-purple-600">
        <Link to="/"><h1 className="text-lg text-white font-serif font-semibold">Gallary</h1></Link>
        <Link to="/create"><button className="px-3 py-2 rounded-md font-serif bg-black hover:bg-white hover:text-purple-700 transition duration-600 text-white font-medium">Create folder</button></Link>
    </div>
    )
}
export default Navbar;