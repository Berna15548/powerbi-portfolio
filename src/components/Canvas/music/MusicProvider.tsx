import { useRef, useState } from "react";
import { MusicContext } from "./MusicContext";

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        if (audioRef.current) {
            const newValue = !isMuted;
            audioRef.current.muted = newValue;
            setIsMuted(newValue);
        }
    };

    return (
        <MusicContext.Provider value={{ audioRef, isMuted, toggleMute }}>
            {children}
        </MusicContext.Provider>
    );
};
