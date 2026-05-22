import { useContext } from "react";
import { MusicContext } from "./MusicContext";

export const useMusic = () => useContext(MusicContext);
