
import '../App.scss';
import Certificados from "./subComponents/Certificados.tsx";
import CoverLetter from "./subComponents/CoverLetter.tsx";
import Skills from "./subComponents/Skills.tsx";


const SobreMi = () => {
    

    
    return (
        <div id="sobre-mi-container" style={{height: "fit-content!important"}}>

            <Skills />
            <div className="columna-sobremi">
                <CoverLetter />
                <Certificados />
            </div>


        </div>

    )
}

export default SobreMi;
