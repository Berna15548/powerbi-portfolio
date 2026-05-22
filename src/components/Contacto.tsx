import { Stack, Tooltip } from "@mantine/core";
import '../App.scss';
import { IconBrandWhatsapp, IconMail, IconBrandGithub } from "@tabler/icons-react";
import { useClipboard } from "@mantine/hooks";
import { contactos } from "../Data/contactData.ts";

const Contacto = () => {
    const clipboard = useClipboard({ timeout: 2000 }); // tiempo que "copiado" permanece true
    const copiado = clipboard.copied;
    const handleCopy = clipboard.copy;

    return (
        <div id="espaciador-top">
            <footer id="contacto-container">
                <div id="marca-de-agua">
                    Este es mi portafolio digital ©2025.
                    <br />
                    Todos los derechos reservados.
                </div>

                <span id="muchas-gracias">Espero que le haya sido de agrado y podamos comunicarnos pronto.</span>
                
                <Stack>
                    {/*===============================================================*/}
                    <Tooltip label={copiado ? "Número copiado!" : "Haz click para copiar"} withArrow>
                        <div className="cont-badge-contacto whatsapp" onClick={() => handleCopy(contactos.whatsapp)}>
                            <div className="layer">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}></span>
                                ))}
                                <IconBrandWhatsapp />
                                <label>Whatsapp</label>
                            </div>
                        </div>
                    </Tooltip>

                    {/*===============================================================*/}
                    <Tooltip label={copiado ? "Email copiado!" : "Haz click para copiar"} withArrow>
                        <div className="cont-badge-contacto email" onClick={() => handleCopy(contactos.email)}>
                            <div className="layer">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}></span>
                                ))}
                                <IconMail />
                                <label>Email</label>
                            </div>
                        </div>
                    </Tooltip>

                    {/*===============================================================*/}
                    <Tooltip label={"Haz click para abrir el link"} withArrow>
                        <div className="cont-badge-contacto github" onClick={() => window.open(contactos.github, "_blank")}>
                            <div className="layer">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}></span>
                                ))}
                                <IconBrandGithub />
                                <label>GitHub</label>
                            </div>
                        </div>
                    </Tooltip>
                </Stack>
            </footer>
        </div>
    );
};

export default Contacto;
