import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";
import { Card, Text, Title } from "@mantine/core";
import { CgHomeScreen, CgScreen } from "react-icons/cg";
import { useEffect, useState, useRef } from "react";
import SwipeHint from "./subComponents/SwipeHint.tsx";
import PrevArrow from "./subComponents/PrevArrow.tsx";
import NextArrow from "./subComponents/NextArrow.tsx";

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
        {
            title: "APP Multiplataforma",
            icon: <CgHomeScreen className="main-icon" />,
            description: `Trabajo colaborativo en el desarrollo de una app de generación de curriculums personales de forma sensilla, con diseño responsivo para PC y móbiles. Cuenta con su propia base de datos, almacenamiento de imagenes en la nube, varias plantillas seleccionables y descarga en PDF.

                        -React, Boostrap, MySql, Maven, SpringBoot, HTML5, Typescript, Javascript.`,
            img: "https://i.ibb.co/DDNtQ4z5/app-Curriculums.webp",
        },
        {
            title: "Sitio Web de Juguetería",
            icon: <CgScreen className="main-icon" />,
            description: `Mockup de una página web que sirva como plataforma de ventas para una empresa de juguetería. Cuenta con una base de datos alojada en Firebase de forma gratuita, registro y autentificación de usuarios y panel de administración con autorización por roles asignados desde la DB.

                        -Angular, Firebase, Scss, Angular Material, Typescript, HTML5.`,
            img: "https://i.ibb.co/wr7MzFQF/jugueteria.webp",
        },
        {
            title: "Librería Online",
            icon: <CgScreen className="main-icon" />,
            description: `Sencilla web para una librería imaginaria con base de datos generada de forma local con MySql. El backend posee un crud completo y funcional. El frontend permite filtrar libros mediante todos sus atributos e incluye un panel de administración para gestionar la base de datos.
                            Incluye una hoja de productos para poblar la DB desde el panel de administración.
                            
                            -React, MySql, Boostrap, HTML5, Typescript, Maven, SpringBoot.`,
            img: "https://i.ibb.co/QFZ4jB36/libreria.webp",
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
