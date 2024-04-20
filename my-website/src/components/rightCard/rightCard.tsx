import styles from './rightCard.module.css';
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export function RightCardComponent() {
    const currentPath = window.location.pathname;
    const navigate = useNavigate();

    const onClickNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <div className={styles.rightCardContainer}>
            <div className={currentPath === '/' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/")}>
                <PersonIcon sx={{ color: currentPath === '/' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/' ? "white" : "#262625" }}>About Me</div>
            </div>
            <div className={currentPath === '/resume' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/resume")}>
                <TextSnippetIcon sx={{ color: currentPath === '/resume' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/resume' ? "white" : "#262625" }}>Resume</div>
            </div>
            <div className={currentPath === '/works' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/works")}>
                <BusinessCenterIcon sx={{ color: currentPath === '/works' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/works' ? "white" : "#262625" }}>Works</div>
            </div>
            <div className={currentPath === '/contacts' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/contacts")}>
                <ContactPageIcon sx={{ color: currentPath === '/contacts' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/contacts' ? "white" : "#262625" }}>Contacts</div>
            </div>
        </div>
    )
}