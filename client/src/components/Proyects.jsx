export function Proyects ({ src, link }) {
    return (
        <>
            <div className='cursor-pointer'>
                <a href={link}>
                    <img className='rounded-2xl transform hover:-translate-x-2 hover:-translate-y-2 hover:scale-[1.035] transition duration-500' src={src} alt="example" />
                </a>
            </div>
        </>
    )
}
