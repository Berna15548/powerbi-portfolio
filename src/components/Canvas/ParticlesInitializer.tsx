import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesInitializer = () => {
    
    // @ts-ignore
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine); // carga de plugins/bundles
           
        }).then(() => {
            setInit(true);
        });
    }, []);

    return null;
};

export default ParticlesInitializer;