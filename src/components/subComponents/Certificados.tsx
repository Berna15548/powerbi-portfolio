import { Card, Button, Group } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { SlControlRewind, SlControlForward } from "react-icons/sl";
import CustomPointerWrapper from "../Canvas/CustomPointerWrapper.tsx";

const cardsData = [
    { title: "Certificado de Programador", image: "https://i.ibb.co/KccDk5xQ/certificado-programador-1-2.jpg" },
    { title: "Curso Análisis y Procesamiento de Datos", image: "https://i.ibb.co/k2rwdvvc/analisis-de-datos.jpg" },
    { title: "Curso Plan de Negocios", image: "https://i.ibb.co/m5wWQypS/plan-de-negocios.jpg" },
    { title: "Curso de Armado y Reparación de PC", image: "https://i.ibb.co/k6VWG6xv/armado-y-reparacion-de-pc.jpg" },
    { title: "Curso de Primeros Auxilios", image: "https://i.ibb.co/sp9wjBtM/certificado-primeros-auxilios.jpg" },
];

const Certificados = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [modalCard, setModalCard] = useState<number | null>(null);

    const dragStartX = useRef(0);

    useEffect(() => {
        cardsData.forEach(card => {
            const img = new Image();
            img.src = card.image;
        });
    }, []);

    const nextCard = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % cardsData.length);
    };

    const prevCard = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    };

    const nextModalCard = () =>
        setModalCard((prev) => (prev! + 1) % cardsData.length);

    const prevModalCard = () =>
        setModalCard((prev) => (prev! - 1 + cardsData.length) % cardsData.length);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Funciones para separar entre clikeo o arrastre del elemento
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        dragStartX.current = e.clientX;
    };

    const handleMouseUp = (idx: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const distance = Math.abs(e.clientX - dragStartX.current);
        if (distance < 5) {
            setModalCard(idx);
        }
    };

    return (
        <motion.div
            id="cards-container"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: isMobile, margin: "-100px" }}
            transition={{ duration: 1, ease: "linear" }}
            style={{ textAlign: "center" }}
        >
            <Group mt="md" id="botonera-certificados">
                <Button color="transparent" size="lg" radius="xl" onClick={prevCard}>
                    <SlControlRewind size={32} />
                </Button>

                <div id="espaciador-mobiles"></div>

                <span>Certificaciones</span>

                <Button color="transparent" size="lg" radius="xl" onClick={nextCard}>
                    <SlControlForward size={32} />
                </Button>
            </Group>

            <CustomPointerWrapper>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        initial={{ opacity: 0, x: direction === 1 ? 150 : -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === 1 ? -300 : 300 }}
                        transition={{ duration: 0.35 }}
                    >
                        <motion.div
                            drag="x"
                            dragElastic={0}
                            dragMomentum={true}
                            onDragEnd={(e, info) => {
                                if (info.velocity.x < -300) {
                                    setDirection(1);
                                    nextCard();
                                } else if (info.velocity.x > 300) {
                                    setDirection(-1);
                                    prevCard();
                                }
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp(index)}
                        >
                            <Card
                                shadow="sm"
                                padding="lg"
                                className="card-certificados"
                            >
                                <div className="titulo-card">{cardsData[index].title}</div>
                                <img
                                    src={cardsData[index].image}
                                    alt={cardsData[index].title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
                                />
                            </Card>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </CustomPointerWrapper>

            {modalCard !== null && (
                <div className="modal-card">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={modalCard}
                            src={cardsData[modalCard].image}
                            alt={cardsData[modalCard].title}
                            initial={{ x: 200, rotate: 10, opacity: 0 }}
                            animate={{ x: 0, rotate: 0, opacity: 1 }}
                            exit={{ x: -200, rotate: -10, opacity: 0 }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                            style={{
                                maxWidth: "90vw",
                                maxHeight: "80vh",
                                objectFit: "contain",
                                borderRadius: 12,
                            }}
                        />
                    </AnimatePresence>

                    <Button
                        color="transparent"
                        size="lg"
                        radius="xl"
                        onClick={prevModalCard}
                        className="esconder-boton-en-movil"
                        style={{
                            position: "absolute",
                            left: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 1000,
                        }}
                    >
                        <SlControlRewind size={32} />
                    </Button>

                    <Button
                        color="transparent"
                        size="lg"
                        radius="xl"
                        onClick={nextModalCard}
                        className="esconder-boton-en-movil"
                        style={{
                            position: "absolute",
                            right: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 1000,
                        }}
                    >
                        <SlControlForward size={32} />
                    </Button>

                    <div
                        onClick={() => setModalCard(null)}
                        style={{ position: "absolute", inset: 0, zIndex: 0 }}
                    />
                </div>
            )}
        </motion.div>
    );
};

export default Certificados;
