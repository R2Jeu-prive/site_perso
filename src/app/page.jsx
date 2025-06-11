"use client"

import bg from '@/../public/images/bg.jpg'
import profile from '@/../public/images/moi_cv_retouche_transparent.png'

import Image from 'next/image'


export default function HomePage() {

  return (
    <main className='flex flex-col'>
      <div className='w-full absolute top-[-20vh] -z-1 pt-[20vh] overflow-visible'>
        <Image src={bg} priority={true} className="size-full object-cover absolute top-0" alt=''/>
        <div className='size-full bg-white/10 absolute top-0'></div>
        <div className='bg-gray/20 backdrop-blur-sm flex flex-row justify-between m-0 p-4 my-6 w-full'>
          <span className='font-loxend text-2xl w-min text-white'>Développeur Freelance</span>
          <span className='font-poiret text-2xl text-right text-white h-min self-end'>Pierre Gueguen</span>
        </div>
      </div>
      <div className='w-full h-36 shadow-md/30 shadow-black/100'></div>
      <section className='flex flex-col items-center px-8'>
        <span className='font-loxend text-gray border-1 border-black rounded-lg px-2 w-fit mt-16'>Développement logiciel & web</span>
        <span className='font-loxend font-bold text-4xl text-[#333] text-center mt-4'>Des solutions sur mesure, pensées pour durer</span>
        <span className='font-loxend text-gray text-center mt-8'>Je conçois des sites et des applications web qui allient performance, clarté et efficacité.</span>
        <button className='bg-orange px-6 py-4 text-white font-loxend text-xl font-bold rounded-2xl shadow-md/70 shadow-orange cursor-pointer mt-8'>Discutons de votre projet</button>
      
      </section>
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
