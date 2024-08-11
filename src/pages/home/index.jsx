import RecipeItem from "../../components/recipe-item"
import { GlobalContext } from "../../context"
import { useContext, useEffect } from "react"
import {Link, useParams} from 'react-router-dom';
import hero from '../../Assets/food.jpeg';
import hero2 from '../../Assets/food2.jpeg';

function Category({item}) {
    const name = item[1]
    return <div className="flex flex-col items-center w-40 overflow-hidden p-5 bg-gray-100 shawdow-xl mx-3 border-2 rounded-2xl border-white"> 
       <div className="text-4xl">{item[0]}</div>
        <span className="text-md text-blue-900 font-medium">{name[0].toUpperCase() + name.slice(1)}</span> 
    </div>
}


export default function Home(){
    const categories = [[ '🥔', "potato" ], ['🍌', "banana"], ['🥕', "carrot"], ['🌽', "corn"], ['🍨', "ice cream"], ['🍟', "fries"], ['🍕', "pizza"]];

    const {recipeList,loading, setSearchParam, handleSubmit}=useContext(GlobalContext)
    
    
    return <div>
        
        {loading ? <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Loading...Please wait</p></div> : 
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        
        {
            recipeList && recipeList.length >0 ? recipeList.map((item) => <RecipeItem item={item}/>) 
            :
            <div>
                <div className="flex items-center justify-around"> 
                <div>
                    <h1 className="font-bold text-6xl">Food Recipe App</h1>
                    <p className="text-2xl ml-1">Enjoy the best meals at home!</p>
                </div>
                <div className="flex space-x-10">
                <img className="h-96 rounded-2xl" src={hero} />
                <img className="h-96 rounded-2xl" src={hero2} />
            </div>

        </div>
            <div className="flex justify-center mt-4">
                {categories.map(item => <Category item={item} /> ) }
            </div>
            </div>
            
        }
        
        
        </div>
}
        </div>
}