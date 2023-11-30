/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { recipes } from '../recipes.js';

interface recipTS {
  id:string,
  name:string,
  ingredients:string[]
}

function Recipe({id, name, ingredients}:recipTS) {
  return (
    <div key={id}>
      <h2 className='mb-5 font-bild text-xl'>{name}</h2>
      <ul className='mb-5'>
        {ingredients.map( ingredient =>
          <li key={ingredient} className='list-disc'>{ingredient}</li>
        )}
      </ul>
    </div>
  );
}



export default function RecipeList() {


  return (
    <article className='p-10'>
      <p className='mb-10'><Link href="/">返回</Link></p>
      <h1 className='text-2xl mb-10'>Recipes</h1>
      {recipes.map( recipe =>
        <Recipe {...recipe} key={recipe.id}/>
      )}
    </article>
  );
}
