import '@mantine/core/styles.css';
import { Group, Badge, Tooltip } from "@mantine/core";
import { IconBrandWhatsapp, IconMail, IconBrandGithub } from "@tabler/icons-react";
import { useClipboard } from "@mantine/hooks";
import { contactos } from "../../Data/contactData.ts";
import { useState } from "react";

const BadgesInicio = () => {
    const clipboard = useClipboard({ timeout: 1500 });
    const [showTooltip, setShowTooltip] = useState({
        whatsapp: false,
        email: false,
        github: false,
    });

    const handleCopy = (tipo: "whatsapp" | "email") => {
        const text = tipo === "whatsapp" ? contactos.whatsapp : contactos.email;
        clipboard.copy(text);
        setShowTooltip((prev) => ({ ...prev, [tipo]: true }));
        setTimeout(() => setShowTooltip((prev) => ({ ...prev, [tipo]: false })), 1500);
    };

    return (
        <div>
            <Group mt="xl" id="contenedor-badges-flex">

                {/* WhatsApp */}
                <Tooltip label={showTooltip.whatsapp ? "Number copied!" : "Mobile number"} withArrow>
                    <Badge
                        size="xl"
                        radius="lg"
                        leftSection={<IconBrandWhatsapp size={28} color="black" />}
                        className="badge-whatsapp"
                        onClick={() => handleCopy("whatsapp")}
                    />
                </Tooltip>

                {/* Email */}
                <Tooltip label={showTooltip.email ? "Email copied!" : "Email"} withArrow>
                    <Badge
                        size="xl"
                        radius="lg"
                        leftSection={<IconMail size={28} color="black" />}
                        className="badge-email"
                        onClick={() => handleCopy("email")}
                    />
                </Tooltip>

                {/* GitHub */}
                <Tooltip label="GitHub repository" withArrow>
                    <Badge
                        size="xl"
                        radius="lg"
                        leftSection={<IconBrandGithub size={28} color="black" />}
                        className="badge-github"
                        onClick={() => window.open(contactos.github, "_blank")}
                    />
                </Tooltip>

            </Group>
        </div>
    );
};

export default BadgesInicio;
