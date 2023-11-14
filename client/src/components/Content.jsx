import React, { Suspense } from 'react'
import { CarouselCustomNavigation } from './Carousel.jsx'
import { FooterWithSocialLinks } from './Footer.jsx'
import './Content.css'
import { useRef } from 'react'
import { useObserver } from '../hooks/useObserver.js'

const Proyects = React.lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const module = await import('./Proyects.jsx')
    return ({ default: module.Proyects })
});

export function Content () {
    const containerRefHome = useRef(null)
    const [ isVisibleHome ] = useObserver(containerRefHome)

    return (
        <>
            <main>
                <div></div>
                <section className='px-24 py-14 bg-gradient-to-br from-[#014a81]' id='home'>
                    <div ref={containerRefHome} className='flex py-6' >
                        <h2 className='text-5xl cursor-pointer hover:border-b-2 hover:border-[#fb0c06]'>Inicio</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                    </div>
                    <div className='flex justify-end'>
                        <span className='text-3xl text-white'>
                            <span className={ isVisibleHome ? 'tracking-in-contract' : '' }>✌️ Hola, soy <strong className='text-[#fb0c06]'>Anderson Tovar</strong>!</span>
                            <div className='flex align-bottom py-12'>
                                <svg className="mx-2 w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                                </svg>
                                <svg className="mx-2 w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                                </svg>
                            </div>
                        </span>
                        <img className={ isVisibleHome ? 'jello-horizontal block w-72 rounded-full justify-end' : 'block w-72 rounded-full justify-end'} src="../assets/images/avatar.jpg" alt="My avatar generated with: https://www.lightxeditor.com" />
                    </div>
                    <p className='text-end text-xl py-4'>Tengo <strong className='text-[#fb0c06]'>2+</strong> años de experiencia como <strong className='text-yellow-400'>FullStack Developer</strong>, tengo la capacidad de desarrollar tanto el <strong className='text-blue-700 border-b-2 border-blue-700'>frontend</strong> como el <strong className='text-[#fb0c06] border-b-2 border-[#fb0c06]'>backend</strong> de las aplicaciones web, utilizando diferentes lenguajes, frameworks y herramientas.</p>
                </section>
                <div className='bg-gradient-to-b from-[#014a81]'></div>
                <section className='px-24 py-14 bg-gradient-to-tr from-[#014a81]' id='projects'>
                    <div className='flex py-6'>
                        <h2 className='text-5xl cursor-pointer hover:border-b-2 hover:border-[#fb0c06]'>Proyectos</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                    </div>
                    <div className='grid grid-cols-2 gap-2 py-6'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Proyects title="Titulo bonito" description="lorem ipsum"></Proyects>
                        </Suspense>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Proyects title="Titulo bonito" description="lorem ipsum" invert={false}></Proyects>
                        </Suspense>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Proyects title="Titulo bonito" description="lorem ipsum"></Proyects>
                        </Suspense>
                    </div>
                </section>
                <div></div>
                <section className='px-24 py-10 bg-gradient-to-br from-[#014a81]' id='about'>
                    <CarouselCustomNavigation></CarouselCustomNavigation>
                </section>
                <div></div>
                <section className='px-24 py-14' id='contact'>
                    <FooterWithSocialLinks></FooterWithSocialLinks>
                </section>
            </main>
        </>
    )
}
