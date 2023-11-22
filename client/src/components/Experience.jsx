import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";

export function Experience () {
    return (
        <>
            <section className="px-24 py-14" id="experience">
                <div className='flex justify-start py-6 transform hover:scale-[1.035] transition duration-500'>
                    <h2 className='text-5xl cursor-pointer'>Experiencia</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[32rem] py-14">
                        <Timeline>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" className="leading-none">
                                Subgerente de Desarrollo <span className="text-blue-500 border-b-2 border-blue-500">(2021 - Actualidad)</span>
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="h6" className="leading-none text-[#ff7832] pb-1 text-base">
                                    Corporación Nacional de Alimentación Escolar.
                                </Typography>
                                <Typography variant="small" className="font-normal text-gray-200">
                                Como Subgerente de Desarrollo, soy responsable de liderar y supervisar el proceso de creación de productos de software que satisfagan las necesidades y expectativas de la empresa. Para ello, participo activamente en el análisis, diseño y desarrollo de sistemas, utilizando metodologías ágiles y buenas prácticas de programación. Mi rol implica también coordinar y gestionar el trabajo de un equipo de desarrolladores, asignando tareas, brindando feedback y aportando soluciones.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </section>
        </>
    )
}