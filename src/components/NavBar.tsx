import '../App.scss';
import { Button } from "@mantine/core";
import { useState } from "react";
import { IconChevronsDown, IconBurger } from "@tabler/icons-react";
import MuteButton from "./Canvas/music/MuteButton.tsx";

const NavBar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const deslizarPantalla = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuAbierto(false);
    };

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <header id="nav-bar-container">
            <div id="nav-flex">
                {/* Vista PC */}
                <div id="nav-flex-pc">
                    <Button onClick={() => deslizarPantalla("inicio-container")}>
                        Home
                    </Button>

                    <Button onClick={() => deslizarPantalla("proyectos-container")}>
                        Projects
                    </Button>

                    <Button onClick={() => deslizarPantalla("sobre-mi-container")}>
                        About Me
                    </Button>

                    <Button onClick={() => deslizarPantalla("contacto-container")}>
                        Contact
                    </Button>

                    <MuteButton />
                </div>

                <IconBurger
                    id="hamburger-icon"
                    stroke={2}
                    onClick={toggleMenu}
                />

                <div id="cont-mute-responsive">
                    <MuteButton />
                </div>

                {/* Menú Móvil */}
                <div
                    id="nav-links"
                    className={menuAbierto ? 'menu-movil-activo' : ''}
                >
                    <Button onClick={() => deslizarPantalla("inicio-container")}>
                        <div className="inner-button">
                            Home <IconChevronsDown size={24} stroke={1.5} />
                        </div>
                    </Button>

                    <Button onClick={() => deslizarPantalla("proyectos-container")}>
                        <div className="inner-button">
                            Projects <IconChevronsDown size={24} stroke={1.5} />
                        </div>
                    </Button>

                    <Button onClick={() => deslizarPantalla("sobre-mi-container")}>
                        <div className="inner-button">
                            About Me <IconChevronsDown size={24} stroke={1.5} />
                        </div>
                    </Button>

                    <Button onClick={() => deslizarPantalla("contacto-container")}>
                        <div className="inner-button">
                            Contact <IconChevronsDown size={24} stroke={1.5} />
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;