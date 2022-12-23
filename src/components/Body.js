import './index.css'
import React from 'react'

const Body = (recipes) => {

    // console.log(recipes.recipes)

    if (recipes.recipes.length > 0) {
        return (
            <div className='row1'>
                {/* <h2>Recepies found !!!</h2> */}
                {recipes.recipes.map((recipe, idx) => {
                    // console.log(recipe.recipe.image)
                    return (
                        <div className="recipe column" key={idx}>
                            <div className="recipe-image">
                                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                            </div>
                            <div className="recipe-info">
                                <a href={recipe.recipe.url} target="_blank" rel="noreferrer"><h3>{recipe.recipe.label}</h3></a>
                                <p>{recipe.recipe.source}</p>
                                {/* <p>{recipe.recipe.url}</p> */}
                            </div>
                            <div className="recipe-ingredients">
                                <h3>Ingredients</h3>
                                <ul>
                                    {recipe.recipe.ingredientLines.map((ingredient, idx) => {
                                        return <li key={idx}><p>{ingredient}</p></li>
                                    }
                                    )}
                                </ul>
                            </div>
                            <div className="button">
                                <a href = {recipe.recipe.url} target="_blank" rel="noreferrer" className="flat-button">Detailed Process</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div className='row'>
                <h2>No Recipes Found</h2>
            </div>
        )
    }
}

export default Body
