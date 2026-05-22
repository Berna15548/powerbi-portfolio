
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft} from "@fortawesome/free-solid-svg-icons";

type ArrowProps = {
    onClick?: () => void;
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="proyecto-side-buttons"
        style={{top: "50%", left: "15%"}}
    >
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: 'white' }} />
    </div>
);

export default PrevArrow;