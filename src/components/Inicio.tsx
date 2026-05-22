import '../App.scss'
import BadgesInicio from "./subComponents/BadgesInicio.tsx";
import { IconChevronDown } from '@tabler/icons-react';
import ParticlesComponent from "./Canvas/ParticlesComponent.tsx";

const Inicio = () => {

    const deslizarPantalla = (id : string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    
    return (
        <div id="inicio-container">

            <div id="espaciador-top-inicio"></div>
                
            <div id="div-background-inicio" >

                <div id="div2-background-inicio" >
                    <div id="div2-background-inicio-hijo">
                    
                        <p className="frase-inicio1" >
                            Werner Lange
                        </p>

                        <h3 className="typing-title" >Data Analyst & Power BI Developer</h3>
                        
                        <p className="frase-inicio2" >
                            I turn complex data into clear, actionable insights using Power BI, SQL, and Excel.

                            With strong experience building interactive dashboards, automated reports, and in-depth analyses, I help organizations make data-driven decisions and deliver real business impact.
                        </p>
                    </div>


                    <BadgesInicio></BadgesInicio>
                    
                </div>

                
                <div className="flechas-abajo"
                >
                    <IconChevronDown className="flecha-libre" onClick={() => deslizarPantalla("proyectos-container")}/>
                    <IconChevronDown className="flecha-libre" onClick={() => deslizarPantalla("proyectos-container")}/>
                    <IconChevronDown className="flecha-libre" onClick={() => deslizarPantalla("proyectos-container")}/>
                </div>
                <ParticlesComponent id="particles-inicio" />
            </div>
        </div>
    )
}

export default Inicio