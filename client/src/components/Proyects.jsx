export function Proyects ({ src, link }) {
    return (
        <>
            <div className='cursor-pointer'>
                <a href={link}>
                    <img className='rounded-2xl w-screen h-full' src={src} alt="example" />
                </a>
            </div>
        </>
    )
}
