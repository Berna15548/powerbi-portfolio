import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

type ArrowProps = {
    onClick?: () => void;
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="proyecto-side-buttons"
        style={{top: "50%", right: "15%",}}
    >
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: 'white' }} />
    </div>
);

export default NextArrow;
