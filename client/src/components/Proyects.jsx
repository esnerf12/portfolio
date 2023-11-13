export function Proyects ({ title, description  }) {
    return (
        <>
            <div className='cursor-pointer'>
                <img className='rounded-full' src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg" alt="example" />
            </div>
            <div className='flex flex-col justify-center align-middle items-center p-4'>
                <h3 className='text-2xl'>{ title }</h3>
                <p>{ description }</p>
            </div>
        </>
    )
}
