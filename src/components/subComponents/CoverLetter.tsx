import { motion } from "framer-motion";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const CoverLetter = () => {
    return (
        <motion.div
            className="cuadro-sobremi"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: isMobile, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "linear" }}
        >
            <div className="p-overflow">
                <h3>Buenas tardes, soy Werner Lange y me dedico al diseño y desarrollo web.</h3>
                <p>
                    {`Tengo 29 años de edad, soy licenciado en Administración de Empresas y finalisé el curso de programación y desarrollo web dictado por el IPFL, (duración de un año), en el cual se desarrollaron los siguientes módulos:

                        - Metodología para el desarrollo de software
                        - Interfaz gráfica Web
                        - Programación de bases de datos
                        - Programación Web
                        - Proyecto Integrador (App multiplataforma para generar curriculums personales)
                        
                        He utilizado gran variedad de herramientas de software en mi portafolio y, en adición a mis habilidades, tengo un nivel de inglés fluido tras haber residido en Australia por 3 años.
                        Busco oportunidades donde pueda aplicar y expandir mis habilidades, trabajar en proyectos desafiantes y aprender todo lo posible en un ambiente laboral profesional.`}
                </p>
            </div>
        </motion.div>
    )
}

export default CoverLetter;
