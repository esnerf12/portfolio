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
            <section className="flex flex-col justify-center gap-8 md:gap-0" id="experience">
                <div className='flex justify-start py-6'>
                    <h2 className='text-3xl md:text-5xl'>Experiencia</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="md:w-[32rem] md:py-14">
                        <Timeline>
                            <TimelineItem className="experience">
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" className="leading-none text-sm md:text-lg pb-4">
                                Subgerente de Desarrollo <span className="text-[#ff7832]">(2021 - Actualidad)</span>
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="h6" className="leading-none pb-2 pt-1 text-sm md:text-base">
                                    MPPE / <span className="text-[#ff7832]">Corporación Nacional de Alimentación Escolar.</span>
                                </Typography>
                                <Typography variant="small" className="font-normal text-gray-200 pb-3">
                                    Como Subgerente de Desarrollo, soy responsable de liderar y supervisar el proceso de creación de productos de software que satisfagan las necesidades y expectativas de la empresa.
                                </Typography>
                                <Typography variant="small" className="font-normal text-gray-200 pb-3">
                                    Para ello, participo activamente en el análisis, diseño y desarrollo de sistemas, utilizando metodologías ágiles y buenas prácticas de programación.
                                </Typography>
                                <Typography variant="small" className="font-normal text-gray-200">
                                    Mi rol implica también coordinar y gestionar el trabajo de un equipo de desarrolladores, asignando tareas, brindando feedback y aportando soluciones.
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