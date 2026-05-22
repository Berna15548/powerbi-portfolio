import SkillBadge from "./SkillBadge.tsx";
import { SiReact, SiAngular, SiFigma, SiJavascript, SiTypescript, SiCss3, SiSass, SiBootstrap, SiMantine, SiMaterialdesign, SiMysql, SiFirebase, SiPostman, SiSwagger, SiIntellijidea, SiTrello, SiAdobephotoshop, SiKrita, SiGoogledocs } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const [activeBadge, setActiveBadge] = useState(null);

    const handleBadgeClick = (label) => {
        setActiveBadge(prevActiveBadge =>
            prevActiveBadge === label ? null : label
        );
    };

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (isMobile && activeBadge) {
            const timer = setTimeout(() => {
                setActiveBadge(null);
            }, 2000);

            return () => clearTimeout(timer);
        }

        return () => {};
    }, [activeBadge]);

    const front = [
        { icon: SiReact, label: "React", link: "https://react.dev" },
        { icon: SiAngular, label: "Angular", link: "https://angular.io" },
        { icon: SiFigma, label: "Figma", link: "https://www.figma.com" },
        { icon: SiJavascript, label: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { icon: SiTypescript, label: "Typescript", link: "https://www.typescriptlang.org" },
        { icon: SiCss3, label: "Css", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { icon: SiSass, label: "Scss", link: "https://sass-lang.com" },
        { icon: SiBootstrap, label: "Bootstrap", link: "https://getbootstrap.com" },
        { icon: SiMantine, label: "Mantine", link: "https://mantine.dev" },
        { icon: SiMaterialdesign, label: "Materials", link: "https://m3.material.io" },
    ];

    const backend = [
        { icon: SiMysql, label: "MySQL", link: "https://www.mysql.com" },
        { icon: SiFirebase, label: "Firebase", link: "https://firebase.google.com" },
        { icon: SiPostman, label: "Postman", link: "https://www.postman.com" },
        { icon: SiSwagger, label: "Swagger", link: "https://swagger.io" },
    ];

    const aux = [
        { icon: SiIntellijidea, label: "IntelliJ", link: "https://www.jetbrains.com/idea" },
        { icon: VscVscodeInsiders, label: "VSC", link: "https://code.visualstudio.com" },
        { icon: SiTrello, label: "Trello", link: "https://trello.com" },
        { icon: SiAdobephotoshop, label: "Photoshop", link: "https://www.adobe.com/products/photoshop.html" },
        { icon: SiKrita, label: "Krita", link: "https://krita.org" },
        { icon: (props) => <FontAwesomeIcon {...props} icon={faFileExcel} />, label: "Excel", link: "https://www.microsoft.com/microsoft-365/excel" },
        { icon: SiGoogledocs, label: "Google Docs", link: "https://docs.google.com" },
    ];

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    return (
        <div className="cuadro-sobremi" style={{ height: "fit-content" }}>
            <div id="skills">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: isMobile, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                >
                    <h3>Herramientas de Front</h3>
                    <div className="skills-badge">
                        {front.map((item) => <SkillBadge
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            link={item.link}
                            isActive={item.label === activeBadge}
                            onClick={handleBadgeClick}
                        />)}
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: isMobile, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                >
                    <h3>Herramientas Backend</h3>
                    <div className="skills-badge">
                        {backend.map((item) => <SkillBadge
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            link={item.link}
                            isActive={item.label === activeBadge}
                            onClick={handleBadgeClick}
                        />)}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: isMobile, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                >
                    <h3>Herramientas Auxiliares</h3>
                    <div className="skills-badge">
                        {aux.map((item) => <SkillBadge
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            link={item.link}
                            isActive={item.label === activeBadge}
                            onClick={handleBadgeClick}
                        />)}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Skills;