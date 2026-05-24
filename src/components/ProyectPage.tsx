import '../App.scss';
import '../ProyectPage.scss'
import {SiReact} from "react-icons/si";
import {SiAngular} from "react-icons/si";
import {SiFigma} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {SiCss3} from "react-icons/si";
import {SiSass} from "react-icons/si";
import {SiBootstrap} from "react-icons/si";
import {SiMantine} from "react-icons/si";
import {SiMaterialdesign} from "react-icons/si";
import {motion} from "framer-motion";
import SkillBadge from "./subComponents/SkillBadge.tsx";
import {useState} from "react";
import {useEffect} from "react";



const ProyectPage = () => {

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

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

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


    return (
        <div
            id="proyect-page-container">
            {/*BACK BUTTOM*/}
            <button>{"<< Back to All Projects"}</button>

            {/*HEADER*/}
            <div
                id='header-panel'>
                <h3>Dataset Analysis: Key Findings and Insight</h3>
                <p>This report summarizes the major findings from the analysis of the Yelp Academic Dataset. The goal was to explore the characteristics of businesses, understand user behavior, and identify key trends that could inform business strategy. The analysis was conducted using SQL queries on a Pos</p>
            </div>

            <p>ENLACE DE DESCARGA</p>

            {/*PROYECT INDEX*/}
            <div
                id="index-panel">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{
                        once: isMobile,
                        margin: "-100px"
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.15
                    }}
                    style={{width: '100%'}}
                >
                    <h3>Project content</h3>

                    <ol id="lista-index"
                        className="list-decimal pl-6 space-y-3 text-sm md:text-base">
                        <li>
                            <a>Technology Stack</a>
                        </li>
                        <li>
                            <a>Methodology</a>
                        </li>
                        <li>
                            <a>Interactive Dashboard</a>
                        </li>
                        <li>
                            <a>Findings (6.1 – 6.6)</a>
                        </li>
                        <li>
                            <a>Limitations</a>
                        </li>
                        <li>
                            <a>Conclusion &amp; Recommendations</a>
                        </li>
                        <li>
                            <a>Explore Code</a>
                        </li>
                    </ol>
                </motion.div>
            </div>

            {/*SKILLS*/}
            <div
                id="skills-panel">
                <div
                    id="skills">

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}
                        viewport={{
                            once: isMobile,
                            margin: "-100px"
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        style={{width: '100%'}}
                    >
                        <h3>Technology Stack</h3>
                        <div
                            className="skills-badge">
                            {front.map((item) =>
                                <SkillBadge
                                    key={item.label}
                                    icon={item.icon}
                                    label={item.label}
                                    link={item.link}
                                    isActive={item.label === activeBadge}
                                    onClick={handleBadgeClick}
                                />)
                            }
                        </div>
                    </motion.div>
                </div>
            </div>

            {/*METHODOLOGY*/}
            <div id="methodology-panel">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    viewport={{
                        once: isMobile,
                        margin: "-100px"
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    style={{width: '100%'}}
                >

                    <h3>Methodology</h3>
                    <p>
                        <strong>ETL & Ingestion:</strong> Ingest Plant Co. 2023 financial records via Excel into Power Query; clean data types and merge transaction tables.
                    </p>
                    <p>
                        <strong>Modeling:</strong> Make DAX calculated measures, slicers and switchers.
                    </p>
                    <p>
                        <strong>Analysis:</strong> Build dynamic Year-over-Year (YoY) growth models and track key business performance metrics using interactive matrices.
                    </p>
                </motion.div>
            </div>

            <div id="Findings">
                <h3>Findings</h3>
                <div>
                    <p>Insights</p>
                </div>
            </div>
        </div>
    );
};

export default ProyectPage;