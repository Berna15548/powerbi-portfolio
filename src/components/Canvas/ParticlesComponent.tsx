import Particles from "@tsparticles/react";
import { useMemo } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";

interface ParticlesComponentProps {
    id: string;
}

const ParticlesComponent = ({ id }: ParticlesComponentProps) => {
    const particlesLoaded = async (container?: Container) => {
        console.log("Particles loaded:", container);
    };

    const options: ISourceOptions = useMemo(() => ({
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "repulse" },
                onHover: { enable: true, mode: "grab" },
            },
            modes: {
                push: { quantity: 4 },
                grab: { distance: 150, links: { opacity: 0.3 } },
                repulse: { distance: 200, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#FFFFFF" },
            links: { color: "#FFFFFF", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { direction: "none" as const, enable: true, outModes: { default: "bounce" as const }, random: true, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: 1.0 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    }), []);

    return (
        <Particles
            id={id}
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
};

export default ParticlesComponent;
