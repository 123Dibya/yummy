import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Navbar(){

    const {searchPram,setSearchParam,handleSubmit,recipeList,setRecipeList} = useContext(GlobalContext)

        console.log(searchPram);
    return(
    <nav className="flex justify-between items-center py-8 px-6 container flex-col bg-purple-200 shadow-md w-full lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
            pinch OF yum 
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="search"
            value={searchPram}
            onChange={(event)=>
                setSearchParam(event.target.value)
            }
            placeholder="Enter Items..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-50 focus:shadow-red-200" 
             />
        </form>
        <ul className="flex gap-5">
            <li>
                <NavLink
                to={'/'}
                onClick={() => setRecipeList([])}
                className="text-black hover:text-gray-700 duration-300"
                >
                    Home
               </NavLink>
            </li>
            <li>
                <NavLink
                
                to={"/favourites"}
                className="text-black hover:text-gray-700 duration-300"
                >
                    Favourites
               </NavLink>
            </li>
            <li>
                <NavLink
                
                to={"/contact"}
                className="text-black hover:text-gray-700 duration-300"
                >
                    Contact
               </NavLink>
            </li>
        </ul>
    </nav>
    );
}