import styles from './rightCard.module.css';
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export function RightCardComponent() {
    const currentPath = window.location.pathname;
    const navigate = useNavigate();
    console.log(currentPath,"current")

    const onClickNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <div className={styles.rightCardContainer}>
            <div className={currentPath === '/vinayJujjuri_website' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/vinayJujjuri_website")}>
                <PersonIcon sx={{ color: currentPath === '/vinayJujjuri_website' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/vinayJujjuri_website' ? "white" : "#262625" }}>About Me</div>
            </div>
            <div className={currentPath === '/vinayJujjuri_website/resume' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/vinayJujjuri_website/resume")}>
                <TextSnippetIcon sx={{ color: currentPath === '/vinayJujjuri_website/resume' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/vinayJujjuri_website/resume' ? "white" : "#262625" }}>Resume</div>
            </div>
            <div className={currentPath === '/vinayJujjuri_website/works' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/vinayJujjuri_website/works")}>
                <BusinessCenterIcon sx={{ color: currentPath === '/vinayJujjuri_website/works' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/vinayJujjuri_website/works' ? "white" : "#262625" }}>Works</div>
            </div>
            <div className={currentPath === '/vinayJujjuri_website/contacts' ? `${styles.iconContainer} ${styles.active}` : styles.iconContainer} onClick={() => onClickNavigate("/vinayJujjuri_website/contacts")}>
                <ContactPageIcon sx={{ color: currentPath === '/vinayJujjuri_website/contacts' ? "white" : "#262625" }} />
                <div style={{ color: currentPath === '/vinayJujjuri_website/contacts' ? "white" : "#262625" }}>Contacts</div>
            </div>
        </div>
    )
}