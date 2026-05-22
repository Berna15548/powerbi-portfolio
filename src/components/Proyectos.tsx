import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";
import { Card, Text, Title } from "@mantine/core";
import { useEffect, useState, useRef } from "react";
import SwipeHint from "./subComponents/SwipeHint.tsx";
import PrevArrow from "./subComponents/PrevArrow.tsx";
import NextArrow from "./subComponents/NextArrow.tsx";
import {LuChartNoAxesCombined} from "react-icons/lu";
import {LuWheat} from "react-icons/lu";
import {ImTree} from "react-icons/im";
import {PiCoffeeBold} from "react-icons/pi";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);

    return isMobile;
};

const Proyectos = () => {
    const isMobile = useIsMobile();

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

    const startXRef = useRef(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        startXRef.current = e.clientX;
    };

    const handleMouseUp = (link: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const distance = Math.abs(e.clientX - startXRef.current);
        if (distance < 5) {
            window.open(link, "_blank");
        }
    };

    const slidesData = [
        /*slide 1*/
        {
            title: "Gross Profit Performance Analysis",
            icon: <LuChartNoAxesCombined className="main-icon" />,
            description: `Comprehensive analysis of Plant Co.’s 2023 gross profit performance, evaluating profitability drivers, revenue variance, and product margins. Developed dynamic models to assess year-over-year growth and track key business performance metrics.

            -Power BI, DAX, Power Query, Excel.`,
            img: "https://i.ibb.co/cjp4z4N/portfolio-gross-profit.webp",
        },
        /*slide 2*/
        {
            title: "Agroclimatic Suitability Assessment",
            icon: <LuWheat className="main-icon" />,
            description: `Geospatial and climate data analysis evaluating agricultural suitability across Paraná, Brazil. Modeled temperature, rainfall patterns, and soil data to identify optimal crop zones, mitigate climate risks, and support data-driven land use strategies.

            -Power BI, DAX, Power Query, Excel.`,
            img: "https://i.ibb.co/nNZ8skmm/Parana-acroclimate-analysis.webp",
        },
        /*slide 3*/
        {
            title: "E-Commerce Customer RFM Segmentation",
            icon: <ImTree className="main-icon" />,
            description: `Advanced customer segmentation utilizing SQL queries to engineer an RFM (Recency, Frequency, Monetary) matrix from transactional data. Optimized complex data extraction to segment active users, calculate customer lifetime value indicators, and uncover purchasing trends.

            -SQL, PostgreSQL, BigQuery, Excel.`,
            img: "https://i.ibb.co/JFv6yLhC/customers-rfm-score.webp",
        },
        {
            title: "Global Coffee Sales Performance Analysis",
            icon: <PiCoffeeBold  className="main-icon" />,
            description: `Comprehensive sales performance analysis for a coffee distributor, evaluating revenue streams across multiple countries, bean varieties, and seasonal timelines. Built interactive dashboards to track geographic trends, product mix optimization, and key commercial growth metrics.

            -Excel, Power Query, Pivot Tables, Data Modeling.`,
            img: "https://i.ibb.co/XxYwJ8tK/excel-coffee-sales.webp",
        },
    ];

    return (
        <div id="proyectos-container">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div
                        key={index}
                        className="contenedor-slide"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp("https://github.com/Berna15548?tab=repositories")}
                    >
                        <Card className="info">
                            <Title
                                order={1}
                                className="title-scanner"
                                component="h1"
                                style={{
                                    display: "inline-block",
                                    position: "relative",
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                {slide.title}
                            </Title>

                            <div className="icon-wrapper">
                                {slide.icon}
                                <div style={{ position: "absolute", right: "20%" }}>
                                    <SwipeHint />
                                </div>
                            </div>

                            <Text>{slide.description}</Text>
                        </Card>

                        <img src={slide.img} width="100%" alt="X" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Proyectos;
