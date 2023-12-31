import { FooterWithSocialLinks } from './Footer.jsx'
import { Proyects } from './Proyects.jsx'
import { Experience } from './Experience.jsx'
import ProyectShopCart from '../images/tienda_carrito.png'
import TicTacToe from '../images/tic_tac_toe.png'
import MouseFollower from '../images/mouse_follower.png'
import AppGatitos from '../images/app_gatitos.png'
import EjamProject from '../images/ejam-project.png'
import ViteIcon from '../images/icons/vitejs.svg'
import ReactIcon from '../images/icons/react.svg'
import Figma from '../images/icons/figma.svg'
import NodeJs from '../images/icons/nodejs.svg'
import emailjs from '@emailjs/browser'
import './css/Content.css'
import { useState } from 'react'

export function Content () {

    const [ send, setSend] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_dijc10n', 'template_7yxxas7', e.target, 'ic6wKw0y9Ld9d_z3t')

        const newSend = !send
        setSend(newSend)
    }

    return (
        <>
            <main className='flex flex-col md:gap-5 bg-gradient-to-br from-blue-900 md:px-60'>
                <section className='flex flex-col justify-center h-screen' id='home'>
                    <div className='grid justify-end align-bottom div-home'>
                        <div className='md:p-6'>
                            <div className='flex align-bottom justify-end py-6 md:py-12'>
                                <a className='hover:scale-110 hover:transition-all cursor-pointer' href="https://github.com/esnerf12/">
                                    <svg className="mx-2 w-8 h-8 md:w-12 md:h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                                <a className='hover:scale-110 hover:transition-all cursor-pointer' href="https://linkedin.com/in/anderson-tovar">
                                    <svg className="mx-2 w-8 h-8 md:w-12 md:h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                        <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                                        <path d="M3 5.012H0V15h3V5.012Z"/>
                                    </svg>
                                </a>
                            </div>
                            <h2 className='title-1 text-sm md:text-3xl'> Hola, soy <strong className='text-[#ff7832]'>Anderson Tovar!</strong> ✌️ </h2>
                        </div>
                    </div>
                    <p className='text-end text-sm md:text-xl py-4'>Tengo <strong className='text-[#ff7832]'>+2</strong> años de experiencia como <strong className='text-yellow-400'>FullStack Developer</strong>, tengo la capacidad de desarrollar tanto el <strong className='text-blue-700 border-b-2 border-blue-700'>frontend</strong> como el <strong className='text-[#ff7832] border-b-2 border-[#ff7832]'>backend</strong> de las aplicaciones web, utilizando diferentes lenguajes, frameworks y herramientas.</p>
                </section>
                <Experience></Experience>
                <section id='projects'>
                    <div className='flex py-6'>
                        <h2 className='text-3xl md:text-5xl'>Proyectos</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                    </div>
                    <div className='md:grid md:grid-cols-2 md:gap-2 flex flex-col gap-10 py-6'>
                        <Proyects 
                            src={ProyectShopCart} 
                            description={
                                <>
                                    <span>Esta app web es producto de una prueba tecnica con <a className='text-[#ff7832]' href="https://www.instagram.com/midu.dev/?hl=es">@midudev</a>. Un muy buen ejemplo para aplicar los hooks useContext y useReducer en React.</span>
                                </>
                            } 
                            link={'https://willowy-mermaid-f58654.netlify.app'} 
                            icons={
                            <>
                                <img className='w-6 h-6' src={ReactIcon} alt="react" />
                                <img className='w-6 h-6' src={ViteIcon} alt="vite" />
                            </>
                        }></Proyects>
                        <Proyects 
                            src={TicTacToe} 
                            link={'https://tangerine-macaron-792ffd.netlify.app'}
                            description={
                                <>
                                    <span>Juego Tic Tac Toe realizado con React y Localstorage.</span>
                                </>
                            }
                            icons={
                                <>
                                    <img className='w-6 h-6' src={ReactIcon} alt="react" />
                                    <img className='w-6 h-6' src={ViteIcon} alt="vite" />
                                </>
                        }></Proyects>
                        <Proyects 
                            src={EjamProject} 
                            link={'https://thunderous-biscuit-564875.netlify.app'}
                            description={
                                <>
                                    <span>Prueba técnica donde se realizó una maquetación web producto de un diseño en Figma.</span>
                                </>
                            }
                            icons={
                                <>
                                    <img className='w-6 h-6' src={ReactIcon} alt="react" />
                                    <img className='w-6 h-6' src={Figma} alt="react" />
                                </>
                        }></Proyects>
                        <Proyects src={MouseFollower} link={'https://symphonious-moxie-8c636e.netlify.app'} icons={
                            <>
                                <img className='w-6 h-6' src={ReactIcon} alt="react" />
                            </>
                        }></Proyects>
                        <Proyects src={AppGatitos} link={'https://chimerical-croissant-1afb91.netlify.app'} icons={
                            <>
                                <img className='w-6 h-6' src={ReactIcon} alt="react" />
                                <img className='w-6 h-6' src={NodeJs} alt="nodejs" />
                            </>
                        }></Proyects>
                    </div>
                </section>
                <section id='contact'>
                    <div className='flex py-6'>
                        <h2 className='text-3xl md:text-5xl'>Contacto</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                    </div>
                    <div className="md:px-10 py-8">
                        {
                            send
                            ? <span className='bg-green-300'>Mensaje enviado con exito!</span>
                            : ''
                        }
                        <form onSubmit={sendEmail} className="flex flex-col gap-3">
                            <label htmlFor="emailFrom">Email:</label>
                            <input type="text" name="email" id="emailFrom" className="text-black p-2" placeholder="persona@example.com" pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" required/>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea name="message" id="message" className="text-black p-2" maxLength="500" placeholder='Gran portafolio 😀' required></textarea>
                            <button className="bg-[#ff7832] hover:scale-105 transition-all p-2">
                                Enviar
                            </button>
                        </form>
                    </div>
                </section>
                <section>
                    <FooterWithSocialLinks></FooterWithSocialLinks>
                </section>
            </main>
        </>
    )
}
