"use client"

import bg from '@/../public/images/bg.jpg'
import profile from '@/../public/images/moi_cv_retouche_transparent.png'

import Image from 'next/image'


export default function HomePage() {

  return (
    <main className='flex flex-col'>
      <figure className='w-full absolute top-[-20vh] -z-1 pt-[20vh] overflow-visible'>
        <Image src={bg} className="size-full object-cover absolute top-0" alt=''/>
        <div className='size-full bg-white/10 absolute top-0'></div>
        <div className='bg-gray/10 backdrop-blur-sm flex flex-row justify-between m-0 p-8 my-6 w-full'>
          <span className='font-loxend text-4xl w-min text-white'>Développeur Freelance</span>
          <span className='font-poiret text-2xl text-right text-white h-min self-end'>Pierre Gueguen</span>
        </div>
      </figure>
      <figure className='w-full h-48 bg-'></figure>
      {/*<div className='size-[50vw] overflow-hidden relative drop-shadow-gray drop-shadow-2xl'>
        <Image src={profile} className='scale-200 translate-y-[20vw] translate-x-[1vw]' alt="pierre gueguen"/>
      </div>
      <div className='bg-white/10 text-blue-white text-lg backdrop-blur-xl flex flex-col gap-4 font-roboto font-extralight m-2 mt-0 px-8 py-6 text-justify rounded-xl shadow-inner shadow-gray'>
        <p>
          Développeur fullstack et étudiant à Télécom Paris, je me lance en freelance après presque dix ans de projets personnels, d'expérimentations et de passion pour le web bien fait.
        </p>
        <p>
          Je conçois des solutions sur-mesure, efficaces, durables et sans empiler des outils inutiles. L'objectif ? Un produit web qui fonctionne, qui évolue bien, et qui vous ressemble.
        </p>
      </div>*/}
    </main>
  )
}
