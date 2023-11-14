import "./Navbar.css";
import ImagoTipo from '../images/anderson-tovar-logo.png'

export function Navbar() {
  return (
    <>
      <nav className="overflow-auto bg-white dark:bg-[#f4f4f2]">
        <ul className="text-right p-16">
          <div className="flex justify-center align-middle">
            <img
              className="w-24 rounded-3xl py-6"
              src={ImagoTipo}
              alt="logo-portfolio"
            />
          </div>
          <a className="hover:no-underline" href="#">
            <li className="flex hover:bg-gradient-to-r hover:from-blue-700 shadow-drop-left slide-left cursor-pointer p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
              <span className="px-1">Tema oscuro</span>
            </li>
          </a>
          <a className="hover:no-underline" href="#">
            <li className="flex hover:bg-gradient-to-r hover:from-blue-700 shadow-drop-left slide-left cursor-pointer p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="px-1">Buscar</span>
            </li>
          </a>
          <a className="hover:no-underline" href="#home">
            <li className="flex justify-end hover:bg-gradient-to-l hover:from-[#ff7832] slide-right cursor-pointer p-2">
              <span className="px-1">Inicio</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </li>
          </a>
          <a className="hover:no-underline" href="#projects">
            <li className="flex justify-end hover:bg-gradient-to-l hover:from-[#ff7832] slide-right cursor-pointer p-2">
              <span className="px-1">Proyectos</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </li>
          </a>
          <a className="hover:no-underline" href="#about">
            <li className="flex justify-end hover:bg-gradient-to-l hover:from-[#ff7832] slide-right cursor-pointer p-2">
              <span className="px-1">Sobre mí</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </li>
          </a>
          <a className="hover:no-underline" href="#contact">
            <li className="flex justify-end hover:bg-gradient-to-l hover:from-[#ff7832] slide-right cursor-pointer p-2">
              <span className="px-1">Contacto</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </li>
          </a>
          
          <a className="hover:no-underline" href="https://github.com/esnerf12">
            <li className="flex align-bottom cursor-pointer shadow-drop-left slide-left hover:bg-gradient-to-r hover:from-blue-700 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span className="px-1">Github</span>🥶
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}
