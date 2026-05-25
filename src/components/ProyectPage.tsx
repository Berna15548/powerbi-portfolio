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
import {motion, AnimatePresence} from "framer-motion";
import SkillBadge from "./subComponents/SkillBadge.tsx";
import {useState} from "react";
import {useEffect} from "react";

const ProyectPage = () => {

    const [activeBadge, setActiveBadge] = useState(null);

    const [modalImg, setModalImg] = useState<string | null>(null);

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
            <div
                id="methodology-panel">
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

            {/* FINDINGS (Sin componentes de animación e independiente) */}
            <div
                id="Findings">
                <h3>Findings</h3>
                <p className="findings-intro">Analysis of plant co performance between 2022 - 2024 reveals the main markets broken down by segment and region month by month</p>

                <div className="insight-container">
                    <h4>1) Declining Revenue Trend in 2024</h4>
                    <p>The 2024 financial results reveal a significant market contraction across nearly all countries, with China, Poland, and Argentina being the most severely affected.</p>

                    <div className="img-container"
                        onClick={() => setModalImg("https://i.ibb.co/MyW496pK/2024-gross-profit.webp")}>
                        <img
                            src="https://i.ibb.co/MyW496pK/2024-gross-profit.webp"
                            alt="Preview"/>
                        <div className="zoom-overlay">
                            <span>Click to zoom</span>
                        </div>
                    </div>

                    <div className="img-footer">
                        <p>Figure 1: Quantity YTD vs PYTD | Month - Country - Product</p>
                        <p>Figure 2: Sales YTD vs PYTD | Month - Country - Product</p>
                        <p>Figure 3: Gross Profit YTD vs PYTD | Month - Country - Product</p>
                    </div>


                    <div className="explicit-analysis">
                        <h4>Findings</h4>
                        <p>The first semester of 2024 shows a steep contraction in sales, units sold, and gross profit across most markets, with China, Poland, and Argentina experiencing the greatest impact. <br/><br/>Notably, although China achieved the largest increase in sales volume in 2023, both sales value and gross profit declined, likely due to a inappropriate dumping strategy. This situation exacerbates the 2024 performance decline, reflecting two successive years of substantial profit deterioration in the Chinese market. <br/><br/>Although 2023 recorded strong overall growth, landscape products accounted for the bulk of the losses. In contrast, indoor products were the hardest hit during the first half of 2024, registering the largest decline by a wide margin.
                        </p>
                    </div>

                    <div className="suggested-strategies">
                        <h4>Suggested Strategies</h4>
                        <div className="suggestion-card">
                            <h5>China Market Recovery Plan</h5>
                            <p>Immediately review and adjust pricing strategy to move away from aggressive dumping. Focus on value-based pricing rather than volume-driven sales.</p>
                        </div>
                        <div className="suggestion-card">
                            <h5>2024 Recovery Plan</h5>
                            <p>Design a Profit Recovery Program for the second half of 2024 with special focus on indoor products. Conduct a strategic review for China, Poland, and Argentina, assessing either a heavy investment approach or potential market abandonment.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* MODAL ANIMADO */}
            <AnimatePresence>
                {modalImg && (
                    <motion.div
                        className="image-modal-overlay"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={() => setModalImg(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{
                                scale: 0.8,
                                y: 20
                            }}
                            animate={{
                                scale: 1,
                                y: 0
                            }}
                            exit={{
                                scale: 0.8,
                                y: 20
                            }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300
                            }}
                        >
                            <img
                                src={modalImg}
                                alt="Full Size"/>
                            <button
                                className="close-modal-btn"
                                onClick={() => setModalImg(null)}>&times;</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProyectPage;