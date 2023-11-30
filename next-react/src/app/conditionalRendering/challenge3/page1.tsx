/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const drinks:any = {
  tea: {
    part: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years'
  }
};

interface drinkTS {
  name:string
}

function Drink({ name }:drinkTS) {
  const info = drinks[name];
  return (
    <section>
      <h1 className='font-bold text-xl my-5'>{name}</h1>
      <dl>
        <dt className='mb-2'>Part of plant</dt>
        <dd className='ml-5 mb-5'>{info.part}</dd>
        <dt className='mb-2'>Caffeine content</dt>
        <dd className='ml-5 mb-5'>{info.caffeine}</dd>
        <dt className='mb-2'>Age</dt>
        <dd className='ml-5 mb-5'>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function PackingList() {
  return (
    <section className='p-10'>
      <p className='mb-10'><Link href="/">返回</Link></p>
      <Drink name="tea" />
      <Drink name="coffee" />
    </section>
  );
}
