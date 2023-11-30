/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { recipes } from '../recipes.js';



export default function RecipeList() {


  return (
    <article className='p-10'>
      <p className='mb-10'><Link href="/">返回</Link></p>
      <h1 className='text-2xl mb-10'>Recipes</h1>
      {recipes.map( recipe =>
        <div key={recipe.id}>
          <h2 className='mb-5 font-bild text-xl'>{recipe.name}</h2>
          <ul className='mb-5'>
            {recipe.ingredients.map( ingredient =>
              <li key={ingredient} className='list-disc'>{ingredient}</li>
            )}
          </ul>
        </div>
      )}
    </article>
  );
}
