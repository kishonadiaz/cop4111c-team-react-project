import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Showall from "./Showall";

const RecipeForm = props=>{
    const [name,setName] = useState("");
    const [cookingtime,setCookingtime] = useState(0);
    const [ingredients,setIngredients] = useState("");

    const {handleAdd} = props;
    const showeverything = props.showeverything
    function validate(e){
        e.preventDefault();

        return false;
    }
    
    return(
        <div className="container col-4">
            <h3>Add New Recipe</h3>
            <form className="position-relative" action="" method="POST" onSubmit={validate} >  
                <div >
                    <label>Recipe Name</label>
                    <input className="recipe_input form-control" type="text" name="name" placeholder="Recipe Name" onInput={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Recipe Cooking Time</label>
                    <input className="recipe_input form-control" type="text" name="cookingtime" placeholder="Recipe Cooking Time" onInput={(e)=>setCookingtime(e.target.value)}/>
                </div>
                <div>
                    <label >Recipe Ingredients</label>
                    <textarea className="recipe_input form-control" type="text" name="ingredients" placeholder="Recipe Cooking Time" onInput={(e)=>setIngredients(e.target.value)}></textarea>
                </div>

                
                <div >
                    <button type="submit" name="submit" className="btn btn-primary position-absolute start-0 mt-5" onClick={ ()=>handleAdd(name,cookingtime,ingredients)}>
                        Submit
                    </button>
                    <Showall showeverything={showeverything} />
                </div>
                
            </form>
            
        </div>
        
    )
}

export default RecipeForm;