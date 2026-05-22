import { useState } from "react";

export const useClipboard = () => {
    const [copiado, setCopiado] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiado(true);
                setTimeout(() => setCopiado(false), 1500);
            })
            .catch((err) => console.error("Error copiando al portapapeles:", err));
    };

    return { copiado, handleCopy };
};

export const contactos = {
    whatsapp: "+54 9 11 2751-1917",
    email: "wernertraveleraus@gmail.com",
    github: "https://github.com/Berna15548?tab=repositories"
};
