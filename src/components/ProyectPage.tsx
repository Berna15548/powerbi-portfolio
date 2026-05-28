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
                            <a>Findings</a>
                        </li>
                        <li>
                            <a>Limitations and conclusions</a>
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

            {/* MODAL ANIMADO para el zoom a imagenes*/}
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
            
            {/* FINDINGS (1)    ----------- */}
            <div className="findings">
                <h3>Insights</h3>
                <p className="findings-intro">Analysis of Plant Co. performance between 2022 - 2024 reveals the main markets broken down by segment and region month by month</p>

                <div className="insight-container">
                    <h4>1. Declining Revenue Trend in 2023 - 2024</h4>
                    <p>The financial results for the first trimester of 2024 vs 2023 reveal a significant market contraction in almost all countries, with China, Poland, and Argentina being the most affected.</p>

                    {/* CONTENEDOR DE LA GALERÍA */}
                    <div className="images-gallery">

                        {/* IMAGEN 1 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/V0Y1xMxC/2024-sales.webp")}>
                            <img src="https://i.ibb.co/V0Y1xMxC/2024-sales.webp" alt="Preview 1"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure A: Sales 2024 vs 2023 | Month</p>
                            </div>
                        </div>

                        {/* IMAGEN 2 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/chpf57Ps/2024-sales-by-country.webp")}>
                            <img src="https://i.ibb.co/chpf57Ps/2024-sales-by-country.webp" alt="Preview 2"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure B: Sales 2024 vs 2023 | Country</p>
                            </div>
                        </div>

                        {/* IMAGEN 3 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/NdcFjNvp/2023-quantity-china.webp")}>
                            <img src="https://i.ibb.co/NdcFjNvp/2023-quantity-china.webp" alt="Preview 3"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure C: Quantity 2023 | Month - China</p>
                            </div>
                        </div>

                        {/* IMAGEN 4 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/ZtJpHHF/gp-2024-by-type.webp")}>
                            <img src="https://i.ibb.co/ZtJpHHF/gp-2024-by-type.webp" alt="Preview 4"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure D: Gross Profit 2024 | Product type</p>
                            </div>
                        </div>

                    </div>

                    <div className="explicit-analysis">
                        <h4>Findings</h4>
                        <p>The first trimester of 2024 shows a steep contraction in sales, units sold, and gross profit across most markets, with China, Poland, and Argentina among the hardest hit. <br/><br/>Notably, although China achieved the largest increase in sales volume in 2023 compared to the previous year, both sales value and gross profit declined, likely due to a inappropriate dumping strategy. This situation exacerbates the 2024 performance decline, reflecting two successive years of substantial profit deterioration in the Chinese market. <br/><br/>Although 2023 recorded strong overall growth, landscape products accounted for the bulk of the losses. In contrast, indoor products were the hardest hit during the first trimester of 2024, registering the largest decline by a wide margin.
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

            {/* FINDINGS (2)    ----------- */}
            <div className="findings">
                <div className="insight-container">
                    <h4>2. Regions with Financial Improvement </h4>
                    <p>United States, France, and Thailand move up in financial performance rankings</p>

                    {/* CONTENEDOR DE LA GALERÍA */}
                    <div className="images-gallery">

                        {/* IMAGEN 1 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/ccb6ZFrg/sales-treemap-2023.webp")}>
                            <img src="https://i.ibb.co/ccb6ZFrg/sales-treemap-2023.webp" alt="Preview 1"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure A: Top 10 sales drop 2023 vs 2022</p>
                            </div>
                        </div>

                        {/* IMAGEN 2 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/C3pCwF4y/2024-sales-treemap.webp")}>
                            <img src="https://i.ibb.co/C3pCwF4y/2024-sales-treemap.webp" alt="Preview 2"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure B: Top 10 sales drop 2024 vs 2023</p>
                            </div>
                        </div>

                        {/* IMAGEN 3 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/57gQR4d/2023-GP-treemap.webp")}>
                            <img src="https://i.ibb.co/57gQR4d/2023-GP-treemap.webp" alt="Preview 1"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure C: Top 10 gross profit drop 2023 vs 2022</p>
                            </div>
                        </div>

                        {/* IMAGEN 4 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/gLdSD0Xp/2024-GP-treemap.webp")}>
                            <img src="https://i.ibb.co/gLdSD0Xp/2024-GP-treemap.webp" alt="Preview 2"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure D: Top 10 gross profit drop 2024 vs 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="explicit-analysis">
                        <h4>Findings</h4>
                        <p>While the 2023 treemap highlights France, Thailand, United States and China among the markets with the strongest declines across sales, quantity, and gross profit simultaneously, but the 2024 results reveal a notable shift. United States, Thailand and France are no longer ranked within the top 10 most affected markets, with France appearing only marginally in the final position for sales decline.
                            <br/><br/>
                            This change indicates a significant improvement on a YTD versus PYTD basis. Although performance remains below desired levels, the positive trend suggests that the underlying drivers behind this recovery should be examined further in order to identify strategic practices and market conditions that could potentially be replicated across other regions.
                        </p>
                    </div>

                    <div className="suggested-strategies">
                        <h4>Suggested Strategies</h4>
                        <div className="suggestion-card">
                            <h5>Performance Recovery Benchmark</h5>
                            <p>Conduct a comparative analysis of the commercial and operational changes implemented in USA, France and Thailand during 2024. Identify the pricing adjustments, product mix optimization, distribution changes, or promotional strategies that contributed to performance stabilization and evaluate their applicability across other declining markets.</p>
                        </div>
                        <div className="suggestion-card">
                            <h5>Cross-Market Replication Initiative</h5>
                            <p>Develop a structured replication program focused on transferring successful recovery practices from USA, France and Thailand to underperforming regions. Prioritize markets showing similar customer behavior, product demand, or profitability patterns in order to accelerate recovery outcomes.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* FINDINGS (3)    ----------- */}
            <div className="findings">

                <div className="insight-container">
                    <h4>3. Sorting Accounts with Upsell Potential</h4>
                    <p>Year 2024 client analysis using scatter chart reveals a low-volume sales segment capable of driving additional profit growth through a sales focus.</p>

                    {/* CONTENEDOR DE LA GALERÍA */}
                    <div className="images-gallery">

                        {/* IMAGEN 1 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/7tcxv23t/scatter-chart-gp-2024.webp")}>
                            <img src="https://i.ibb.co/7tcxv23t/scatter-chart-gp-2024.webp" alt="Preview 1"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure A: Account by Gross Profit % over sales (Y) and raw GP (X)</p>
                            </div>
                        </div>

                        {/* IMAGEN 2 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/Fb5sG5kR/scatter-chart-gp-2024-focus.webp")}>
                            <img src="https://i.ibb.co/Fb5sG5kR/scatter-chart-gp-2024-focus.webp" alt="Preview 2"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure B: Scatter chart focus on top-left quadrant</p>
                            </div>
                        </div>

                    </div>

                    <div className="explicit-analysis">
                        <h4>Findings</h4>
                        <p>By organizing client accounts according to Gross Profit percentage and Gross Profit volume, we can establish average reference lines that divide them into four quadrants. This approach allows us to classify clients based on low or high profitability and sales value. The strongest-performing accounts are concentrated in the top-right quadrant, combining high profit margins with high profit volume, while the bottom-left quadrant represents the weakest-performing accounts with low performance in both indicators.
                            <br/><br/>
                            The top-left quadrant in the scatter chart shows clients with high profit margins but low value. They are highly profitable per transaction, yet they remain small in terms of overall portfolio share.
                        </p>
                    </div>

                    <div className="suggested-strategies">
                        <h4>Suggested Strategies</h4>
                        <div className="suggestion-card">
                            <h5>Sales Focus</h5>
                            <p>Prioritize commercial efforts toward customer segments and accounts currently operating with the strongest profit margins. Increase sales volume through upselling, larger order incentives, and long-term contract opportunities in order to maximize profitability without significantly increasing operational costs.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* FINDINGS (4)    ----------- */}
            <div className="findings">
                <div className="insight-container">
                    <h4>4. Unstable Sales Trend Behavior </h4>
                    <p>No clear repetitive trend can be identified in the sales flow, indicating elevated volatility and reduced forecasting reliability.</p>

                    {/* CONTENEDOR DE LA GALERÍA */}
                    <div className="images-gallery">

                        {/* IMAGEN 1 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/BKV3S7yf/stacked-colum-2023-by-quantity.webp")}>
                            <img src="https://i.ibb.co/BKV3S7yf/stacked-colum-2023-by-quantity.webp" alt="Preview 1"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure A: Quantity 2023 vs 2022 by product type</p>
                            </div>
                        </div>

                        {/* IMAGEN 2 */}
                        <div className="img-container" onClick={() => setModalImg("https://i.ibb.co/Q31LRJWg/stacked-colum-2024-by-quantity.webp")}>
                            <img src="https://i.ibb.co/Q31LRJWg/stacked-colum-2024-by-quantity.webp" alt="Preview 2"/>
                            <div className="zoom-overlay"><span>Click to zoom</span></div>

                            <div className="img-footer">
                                <p>Figure B: Quantity 2024 vs 2023 by product type</p>
                            </div>
                        </div>

                    </div>

                    <div className="explicit-analysis">
                        <h4>Findings</h4>
                        <p>The stacked column chart shows an irregular pattern with no consistent seasonal cycle. Peaks and troughs shift significantly form 2022 to 2024, making it difficult to identify any reliable recurring pattern.<br/>
                            This absence of clear seasonality highlights substantial variability in demand behavior across periods, sales quantity appears to be driven more by fluctuating external or internal factors rather than predictable calendar effects.<br/><br/>
                            
                            This high level of variability suggests the need for a deeper analysis of the specific drivers influencing sales quantity to improve forecasting accuracy and reduce volatility in future periods.
                        </p>
                    </div>

                    <div className="suggested-strategies">
                        <h4>Suggested Strategies</h4>
                        <div className="suggestion-card">
                            <h5>Market Trend Factors Study</h5>
                            <p>Develop a data-driven model to identify the most consistent demand drivers across periods. This includes analyzing external factors like promotions, pricing actions, market events, that showed the strongest correlation with quantity sold in stable months</p>
                        </div>
                    </div>
                </div>

            </div>

            {/*LIMITATIONS AND CONCLOSIONS*/}

            <div
                className="limitations-container">
                <h3>Limitations<hr/></h3>
                <h4>Short YoY comparison window</h4>
                <p>Lack of data prior to 2022 period limits the ability to identify long-term trends and makes it difficult to forecast.</p>

                <h4>Regional data limited to country level</h4>
                <p>The information is only disaggregated by countries and does not include further breakdown by regions, states, or provinces. This restricts the analysis to a macro level and prevents more granular geographic insights.
                </p>
            </div>

            <div
                className="limitations-container">
                <h3>Conclusions<hr/></h3>

                <p>This 2+ years analysis highlights a clear contraction in sales and gross profit during the first quarter of 2024 across most markets. While some regions like United States, France, and Thailand are showing signs of recovery, others such as China, Poland, and Argentina continue to underperform significantly. <br/>
                    The disparity in performance between product categories and the existence of high-margin, low-volume accounts present clear opportunities for improvement.
                </p>
            </div>
        </div>
    );
};

export default ProyectPage;