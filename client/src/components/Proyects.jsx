export function Proyects ({ src, link, icons, description }) {
    return (
        <>
            <div className="flex flex-col gap-5 h-auto md:p-10">
                <div>
                    <img className='projects rounded-2xl w-screen h-full' src={src} alt="example" />
                </div>
                <div className="p-2">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="flex gap-4 mx-2">
                    {icons}
                </div>
                <div className="flex gap-2">
                    <a href={link} className="flex justify-center hover:scale-105 transition-all hover:no-underline p-2" >
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                            <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
                            </g>
                        </svg>
                    </a>
                    <button className="flex justify-center hover:scale-105 transition-all hover:no-underline p-2">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
