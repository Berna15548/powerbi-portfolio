import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";

import { Card, Text, Title } from "@mantine/core";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";   // ← IMPORTANTE

import SwipeHint from "./subComponents/SwipeHint.tsx";
import PrevArrow from "./subComponents/PrevArrow.tsx";
import NextArrow from "./subComponents/NextArrow.tsx";

import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuWheat } from "react-icons/lu";
import { ImTree } from "react-icons/im";
import { PiCoffeeBold } from "react-icons/pi";

interface ProjectCardProps {
    titulo: string;
    descripcion: string;
    Icono?: React.ComponentType<{ className?: string }>;
}

const ProjectCard = ({ titulo, descripcion, Icono }: ProjectCardProps) => {
    return (
        <div className="proyect-frame">
            {Icono && (
                <div className="proyect-icon">
                    <Icono className="main-icon" />
                </div>
            )}
            <h3>{titulo}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{descripcion}</p>
        </div>
    );
};

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);
    return isMobile;
};

const Proyectos = () => {
    const navigate = useNavigate();        // ← Agregado
    const isMobile = useIsMobile();
    const startXRef = useRef(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: isMobile ? "0px" : "20%",
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        startXRef.current = e.clientX;
    };

    // Función que maneja el clic
    const handleSlideClick = (slide: any) => (e: React.MouseEvent<HTMLDivElement>) => {
        const distance = Math.abs(e.clientX - startXRef.current);

        if (distance < 8) {   // clic real (no arrastre)
            if (slide.title === "Gross Profit Performance Analysis") {
                navigate("/proyect-page-1");
            }
        }
    };

    const slidesData = [
        {
            title: "Gross Profit Performance Analysis",
            icon: LuChartNoAxesCombined,
            description: `Comprehensive analysis of 2023 gross profit performance, evaluating profitability drivers, revenue variance, and dynamic models to track key business metrics.`,
            img: "https://i.ibb.co/cjp4z4N/portfolio-gross-profit.webp",
            slidetext: `Comprehensive analysis of Plant Co.’s 2023 gross profit performance, evaluating profitability drivers, revenue variance, and product margins. Developed dynamic models to assess year-over-year growth and track key business performance metrics. 
        
        -Power BI, DAX, Power Query, Excel.`,
        },
        {
            title: "Agroclimatic Suitability Assessment",
            icon: LuWheat,
            description: `Geospatial and climate data analysis evaluating agricultural suitability to identify optimal crop zones and mitigate environmental risks.`,
            img: "https://i.ibb.co/nNZ8skmm/Parana-acroclimate-analysis.webp",
            slidetext: `Geospatial and climate data analysis evaluating agricultural suitability across Paraná, Brazil. Modeled temperature, rainfall patterns, and soil data to identify optimal crop zones, mitigate climate risks, and support data-driven land use strategies.
        
        -Power BI, DAX, Power Query, Excel.`,
        },
        {
            title: "E-Commerce Customer RFM Segmentation",
            icon: ImTree,
            description: `Advanced customer segmentation engineering an RFM matrix from transactional data to identify active user trends and lifetime value indicators.`,
            img: "https://i.ibb.co/JFv6yLhC/customers-rfm-score.webp",
            slidetext: `Advanced customer segmentation utilizing SQL queries to engineer an RFM (Recency, Frequency, Monetary) matrix from transactional data. Optimized complex data extraction to segment active users, calculate customer lifetime value indicators, and uncover purchasing trends.

        -SQL, PostgreSQL, BigQuery, Excel.`,
        },
        {
            title: "Global Coffee Sales Performance Analysis",
            icon: PiCoffeeBold,
            description: `Comprehensive sales analysis evaluating revenue streams, geographic trends, and product mix optimization across multiple countries.`,
            img: "https://i.ibb.co/XxYwJ8tK/excel-coffee-sales.webp",
            slidetext: `Comprehensive sales performance analysis for a coffee distributor, evaluating revenue streams across multiple countries, bean varieties, and seasonal timelines. Built interactive dashboards to track geographic trends, product mix optimization, and key commercial growth metrics.

        -Excel, Power Query, Pivot Tables, Data Modeling.`,
        },
    ];

    return (
        <div id="proyectos-container">
            <Slider {...settings}>
                {slidesData.map((slide, index) => {
                    const SliderIcon = slide.icon;

                    return (
                        <div
                            key={index}
                            className="contenedor-slide"
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleSlideClick(slide)}     // ← ESTO FALTABA
                        >
                            <Card className="info">
                                <Title order={1} className="title-scanner" component="h1">
                                    {slide.title}
                                </Title>
                                <div className="icon-wrapper">
                                    <SliderIcon className="main-icon" />
                                    <div style={{ position: "absolute", right: "20%" }}>
                                        <SwipeHint />
                                    </div>
                                </div>
                                <Text>{slide.slidetext}</Text>
                            </Card>
                            <img src={slide.img} width="100%" alt={slide.title} />
                        </div>
                    );
                })}
            </Slider>

            <div id="project-grid-system">
                {slidesData.map((proyecto, index) => (
                    <div className="custom-project-card" key={index}>

                        {/* Bloque de Textos */}
                        <div className="card-content">
                            <h4 className="card-project-title">{proyecto.title}</h4>
                            <p className="card-project-description">{proyecto.description}</p>
                        </div>

                        {/* Icono de Fondo */}
                        <div className="card-background-icon">
                            <proyecto.icon />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Proyectos;