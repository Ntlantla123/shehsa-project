import React,{useRef} from 'react';
import { TopNav } from '../components/TopNav';


export const Recipes = ({API_KEY,query,setQuery,recipes,setRecipes,isDoneLoading,setIsDoneLoading}) => {
    //main variables
    const API_URL_normal = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2/information?apiKey=0d226b2d19b6426dad13000aac1c2c16&includeNutrition=true`;
    let ApiUrl_searchFeature =`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${75}&apiKey=${API_KEY}&includeNutrition=true`
    const videoEl = useRef();

    const handleSearch = async(e) => {
        e.preventDefault();videoEl.current.play();setIsDoneLoading("loading");
        let myTimeout = setTimeout(() => {
            setIsDoneLoading("");
            clearTimeout(myTimeout);
        }, 2000);
        //const recipeData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${9}&apiKey=${API_KEY}&includeNutrition=true`).then( response => response.json() ).then( jsonData => jsonData.results);
        //setRecipes(recipeData);
        //setQuery("");
        //console.log(recipeData);
    }
  return (
    <section className={`Recipes`}>
        <TopNav/>
        <form style={{marginBottom:"60px"}} onSubmit={handleSearch}>
            <input
            className={`RecipeSearchBar`} 
            type="text" 
            value={query}
            onChange={(e) => {console.log(e.target.value);setQuery(e.target.value);}}/>
            <button className={`RecipeSearchButton`} type="submit">search</button>
        </form>
        <div className={`${(isDoneLoading === "loading")? "LoadingScreen" : "DisplayNone"}`}>
            <video ref={videoEl} src={`loading.mp4`} loop="true" className={`${(isDoneLoading === "loading")? "LoadingScreen" : "DisplayNone"}`}/>
        </div>
        <div className={`RecipesContainer`}>
            <ul className={`RecipesList`}>
                {recipes.map((item)=>(
                <li className={`RecipeListItem`} key={item.id}>
                    <img className={`RecipeListImg`} src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3><a href="/recipes/pancake">view method</a>
                </li>
            ))}
            </ul>
        </div>
    </section>
  )
}