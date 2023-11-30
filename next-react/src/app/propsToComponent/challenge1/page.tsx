/* eslint-disable @next/next/no-img-element */
import Link from 'next/link' 
import { getImageUrl } from '../utils.js'

interface ProfileTs{
  imgId:string,
  name:string,
  profession:string,
  awards:any,
  discovered:string,
  imgSize:number
}


function Profile({
  imgId,
  name,
  profession,
  awards,
  discovered,
  imgSize = 70
}:ProfileTs){
  return(
    <section className="profile mb-5 border-2 p-5">
      <h2 className='font-bold'>{name}</h2>
      <img
        className='rounded-full my-5'
        src={getImageUrl(imgId)}
        alt={name}
        width={imgSize}
        height={imgSize}
      />
      <ul className='text-sm'>
        <li>
          <b>Profession: </b> 
          {profession}
        </li>
        <li>
        <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}


export default function Gallery() {
  return (
    <div className='p-10'>
    <p className='mb-10'><Link href="/">返回</Link></p>
      <h1 className='mb-5'>Notable Scientists</h1>
      <Profile 
        imgId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovered="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        imgSize={70}
      />
      <Profile
        imgId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovered="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        imgSize={100}
      />
      <p><Link href="/propsToComponent/challenge1/">其他方法</Link></p>
    </div>
  );
}

