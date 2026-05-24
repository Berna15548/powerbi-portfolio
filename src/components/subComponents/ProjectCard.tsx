import React from 'react';

// Definimos los tipos de las propiedades que va a recibir el componente
interface ProjectCardProps {
    titulo: string;
    descripcion: string;
    Icono?: React.ComponentType; // El signo ? lo hace opcional por si algún proyecto no lleva ícono
    link?: string;
}

export default function ProjectCard({ titulo, descripcion, Icono, link }: ProjectCardProps) {
    return (
        <div className="proyect-frame">
            {Icono && (
                <div className="proyect-icon">
                    <Icono /> {/* Se renderiza como un componente normal de React */}
                </div>
            )}
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="proyect-link">
                    Ver proyecto
                </a>
            )}
        </div>
    );
}