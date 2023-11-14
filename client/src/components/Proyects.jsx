export function Proyects ({ title, description, src, link, invert=true  }) {
    return (
        <>
            {
                invert
                ?   <>
                        <div className='cursor-pointer'>
                            <a href={link}>
                                <img className='rounded-2xl h-[400px]' src={src} alt="example" />
                            </a>
                        </div>
                        <div className='flex flex-col justify-center align-middle items-center p-4'>
                            <h3 className='text-2xl'>{ title }</h3>
                            <p>{ description }</p>
                        </div>
                    </>
                :   <>
                        <div className='flex flex-col justify-center align-middle items-center p-4'>
                            <h3 className='text-2xl'>{ title }</h3>
                            <p>{ description }</p>
                        </div>
                        <div className='cursor-pointer'>
                            <a href={link}>
                                <img className='rounded-2xl h-[400px]' src={src} alt="example" />
                            </a>
                        </div>
                    </>
            }
        </>
    )
}
