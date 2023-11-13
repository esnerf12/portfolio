export function Proyects ({ title, description, invert=true  }) {
    return (
        <>
            {
                invert
                ?   <>
                        <div className='cursor-pointer'>
                            <img className='rounded-full h-[400px]' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg" alt="example" />
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
                            <img className='rounded-2xl h-[400px]' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg" alt="example" />
                        </div>
                    </>
            }
        </>
    )
}
