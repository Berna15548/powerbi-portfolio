import { createContext } from "react";

export type MusicContextType = {
    audioRef: React.RefObject<HTMLAudioElement | null>;
    isMuted: boolean;
    toggleMute: () => void;
};

export const MusicContext = createContext<MusicContextType>({
    audioRef: { current: null },
    isMuted: true,
    toggleMute: () => {},
});
