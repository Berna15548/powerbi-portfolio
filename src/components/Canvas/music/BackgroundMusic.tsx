import { useEffect } from "react";
import {useMusic} from "./UseMusic.ts";

const BackgroundMusic = () => {
    const { audioRef, isMuted } = useMusic();

    useEffect(() => {
        const unlockAudio = () => {
            if (audioRef.current) {
                audioRef.current.muted = isMuted;
                audioRef.current.volume = 0.15;
                audioRef.current.play().catch(() => {});
            }
            window.removeEventListener("click", unlockAudio);
        };

        window.addEventListener("click", unlockAudio);

        return () => {
            window.removeEventListener("click", unlockAudio);
        };
    }, [audioRef, isMuted]);

/*    return (
        <audio
            ref={audioRef}
            src="/background-music.mp3"
            autoPlay
            loop
            style={{ display: "none" }}
        />
    );*/
};

export default BackgroundMusic;
