import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { useMusic } from "./UseMusic.ts";

const MuteButton = () => {
    const { isMuted, toggleMute } = useMusic();

    return (
        <button id="muteButton" onClick={toggleMute}>
            {isMuted ? <HiVolumeOff size={24} /> : <HiVolumeUp size={24} />}
        </button>
    );
};

export default MuteButton;
