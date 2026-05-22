import { Badge } from "@mantine/core";
import {useState} from "react";

// @ts-ignore
const SkillBadge = ({ icon: Icon, label, link, isActive, onClick: handleParentClick }) => {

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const [contador, setContador] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

        console.log("badge clikeado" + (contador + 1));
        setContador(prev => prev + 1);

        handleParentClick(label);

        if (isMobile) {
            if (isActive && link) {
                window.open(link, "_blank", "noopener,noreferrer");
            }
        }
        else if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <Badge
            onClick={handleClick}
            className={isActive ? "mantine-Badge-root badge-activo" : "mantine-Badge-root"}
            style={{
                cursor: !isMobile && link ? "pointer" : "default",
                pointerEvents: "auto"
            }}
        >
            <div className="skill-icon">
                <Icon />
            </div>
            {label}
        </Badge>
    );
};

export default SkillBadge;